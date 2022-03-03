import validateCreateUser from "../model/UserValidation.js";
import { createNewUser } from "../useCases/createNewUser.js";
import { updateUserFunc } from "../useCases/updateUser.js";
import { deleteUserWithId } from "../useCases/deleteUser.js";

export const createUser = async (req, res) => {
  const validationResult = validateCreateUser(req.body);
  if (validationResult.error) {
    return res.status(400).send("Invalid data");
  }
  try {
    const user = await createNewUser(req.body);
    return res.status(200).send({
      message: "User was added",
      data: user,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await updateUserFunc(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).send("There is no user");
    }
    return res.status(200).send({
      message: "User was updated",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
  // const updatedUserData = await getUser(req.params.id);

  // return res.status(200).send({
  //   message: "User was updated",
  //   data: updatedUser,
  // });
};

export const deleteUser = async (req, res) => {
  try {
    const { deletedCount } = await deleteUserWithId(req.params.id);
    if (!deletedCount) return res.status(404).send("There is no user");
  } catch (error) {
    return res.status(500).send(error.message);
  }
  return res.status(200).send(`User with ${req.params.id} was deleted`);
};
