import { updateUserById } from "../repositories/commands.js";
import { createHashedPassword } from "./createNewUser.js";

export const updateUserFunc = async (id, userData) => {
  if (userData.password) {
    if (userData.password !== userData.confirmPassword) {
      throw new Error("Password and confirmPassword must match");
    }
    const hashedPassword = await createHashedPassword(userData.password);
    const verifiedUser = {
      ...userData,
      password: hashedPassword,
    };
    return updateUserById(id, verifiedUser);
  } else {
    return updateUserById(id, userData);
  }
};
