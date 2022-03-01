import validateCreateUser from "../model/UserValidation.js";
import { createNewUser } from "../useCases/createNewUser.js";
import User from "../model/User.js";

export const createUser = (req, res) => {
  const validationResult = validateCreateUser(req.body);
  if (validationResult.error) {
    console.log(validationResult);
    return res.status(400).send("Invalid credentials");
  }
  try {
    const savedUser = createNewUser(req.body);
  } catch (error) {
    return res.status(400).send("User was not created");
  }
  return res.status(200).send(`User with ${req.body.email} was created`);
};
