// import { createUser } from "../repositories/commands.js";
import User from "../model/User.js";
import bcrypt from "bcrypt";

const verifyIfUserExists = async (email) => {
  const isEmailExist = await User.findOne({ email: email });
  if (isEmailExist) {
    return true;
  }
  return false;
};

const createHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const sendEmail = () => {
  //todo: replace with sending email funcionality when implemented
};

export const createNewUser = async (body) => {
  const verifyEmail = await verifyIfUserExists(body.email);
  if (verifyEmail) {
    throw new Error("User already exists in database");
  }
  const hashedPassword = await createHashedPassword(body.password);
  body.password = hashedPassword;
  body.confirmPassword = hashedPassword;
  sendEmail();
  User.create(body);
};
