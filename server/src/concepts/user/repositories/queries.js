import User from "../model/User";

export async function getUser(userId) {
  const user = await User.findById(userId);
  if (!user) {
    throw "There is no user with id = " + userId;
  }
  return user;
}

export async function getAllUsers() {
  const users = await User.find();

  return users;
}
