import validateCreateUser from "../model/UserValidation.js";
import User from "../model/User.js";
import { createNewUser } from "../useCases/createNewUser.js";
import { updateUserFunc } from "../useCases/updateUser.js";
import { deleteUserWithId } from "../useCases/deleteUser.js";
import { signInUserFunc } from "../useCases/signInUser.js";
import { getUser, getAllUsers } from "../repositories/queries.js";

export const createUser = async (req, res) => {
  const { error } = validateCreateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
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

export const loginUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Need email and password");
    }
    const token = await signInUserFunc(req.body.email, req.body.password);
    if (!token) {
      return res.status(400).send("Unsuccessful login attempt");
    }
    res.setHeader("token", token);
    return res.status(200).send({
      message: "Successfully logged in",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const activateAccount = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send("There is no user");
  }
  user.set({
    isActive: true,
  });

  try {
    await user.save();
    res.send("Your account has been activated");
  } catch (err) {
    return res.status(500).send("Account couldn't be activated");
  }
};

export const makeUserAnAdmin = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send("There is no user");
  }
  user.set({
    isAdmin: true,
  });

  try {
    await user.save();
    res.status(200).send("User has been changed to Admin");
  } catch (err) {
    return res.status(500).send("User couldn't be changed to Admin");
  }
};

export const getOneUser = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    if (!user) return res.status(404).send("No user found!");
    return res.status(200).send(user);
  } catch (error) {
    return res.status.send(500).send(error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    return res.status(200).send(allUsers);
  } catch (error) {
    return res.status.send(500).send(error.message);
  }
};
