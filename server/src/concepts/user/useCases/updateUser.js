import { updateUserById } from "../repositories/commands.js";

export const updateUserFunc = (id, userData) => {
  return updateUserById(id, userData);
};
