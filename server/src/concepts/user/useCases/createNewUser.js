import { createUser } from "../repositories/commands.js";
import bcrypt from "bcrypt";
import { getUserWithEmail } from "../repositories/queries.js";
import sendEmail from "../../../services/mail/index.js";
import pug from "pug";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const notifyUser = (userData) => {
  const emailData = {
    to: userData.email,
    html: pug.renderFile(
      path.resolve(__dirname, "../../../../views/user.pug"),
      {
        email: userData.email,
      }
    ),
    subject: "Account created - confirmation",
  };
  sendEmail(emailData);
};

export const createNewUser = async (body) => {
  const verifyEmail = await getUserWithEmail(body.email);
  if (verifyEmail) {
    throw new Error("User already exists in database");
  }
  const hashedPassword = await createHashedPassword(body.password);
  const verifiedUser = {
    ...body,
    password: hashedPassword,
    isAdmin: false,
  };

  const createdUser = await createUser(verifiedUser);

  notifyUser(verifiedUser);

  return createdUser;
};
