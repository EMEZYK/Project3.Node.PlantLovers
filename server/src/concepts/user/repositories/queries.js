import User from "../model/User.js";

export async function getUser(userId) {
  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw "There is no user with id = " + userId;
  }
  return user;
}

export async function getAllUsers() {
  const users = await User.find();

  return users;
}

export async function getUserWithEmail(email) {
  const foundUserByEmail = await User.findOne({ email: email });

  return foundUserByEmail;
}
