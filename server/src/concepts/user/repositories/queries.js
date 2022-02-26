import User from "../model/User";

export async function getUser(userId) {
  const user = await User.findById(userId);

  return user;
}

export async function getAllUsers() {
  const users = await User.find();

  return users;
}
