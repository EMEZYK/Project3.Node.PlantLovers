import { createUser } from "../repositories/commands.js";
import bcrypt from "bcrypt";
import { getUserWithEmail } from "../repositories/queries.js";
import sendEmail from "../../../services/mail/index.js";

const createHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const notifyUser = (userData) => {
  const emailData = {
    to: userData.email,
    text: "Hey, your account was successfully created!",
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
  createUser(verifiedUser);
  notifyUser(verifiedUser);
};
