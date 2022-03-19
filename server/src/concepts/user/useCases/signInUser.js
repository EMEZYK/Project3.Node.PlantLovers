import User from "../model/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../authorization/controllers/auth.js";

export const signInUserFunc = async (email, password) => {
  if (!email || !password) {
    throw new Error("Need email and password");
  }
  const user = await User.findOne({ email: email })
    .select("email password")
    .exec();

  if (!user) {
    throw new Error("User not found");
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    throw new Error("Invalid password");
  }
  if (!user.active) throw new Error(`You have to activate your account`);

  const token = generateToken(user);
  return token;
};
