import { deleteUser } from "../repositories/commands.js";

export const deleteUserWithId = (id) => {
  return deleteUser(id);
};
