import User from "../model/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../authorization/controllers/auth.js";

export const signInUserFunc = async (email, password) => {
  const user = await User.findOne({ email: email })
    .select("email active password")
    .exec();

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    throw new Error("Invalid email or password");
  }
  if (!user.active) throw new Error(`You have to activate your account`);

  const token = generateToken(user);
  return token;
};
