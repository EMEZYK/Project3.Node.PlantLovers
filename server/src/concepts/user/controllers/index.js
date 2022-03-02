import validateCreateUser from "../model/UserValidation.js";
import { createNewUser } from "../useCases/createNewUser.js";
import { deleteUserWithId } from "../useCases/deleteUser.js";

export const createUser = async (req, res) => {
  const validationResult = validateCreateUser(req.body);
  if (validationResult.error) {
    return res.status(400).send("Invalid credentials");
  }
  try {
    await createNewUser(req.body);
  } catch (error) {
    return res.status(500).send(error.message);
  }
  return res.status(200).send(`User with ${req.body.email} was created`);
};

export const deleteUser = async (req, res) => {
  try {
    await deleteUserWithId(req.params.id);
  } catch (error) {
    return res.status(400).send(error.message);
  }
  return res.status(200).send(`User with ${req.params.id} was deleted`);
};
