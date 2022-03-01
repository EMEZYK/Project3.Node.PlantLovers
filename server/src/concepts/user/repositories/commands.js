import User from "../model/User.js";

export const createUser = async (data) => {
  const newUser = new User({
    ...data,
  });

  try {
    await newUser.save();
    return newUser;
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw new Error("Email must be unique");
    }
  }
};

export const updateUser = async (filter, data) => {
  await User.updateOne(filter, data);
};

export const deleteUser = async (id) => {
  await User.deleteOne({ _id: id });
};

export const deleteAllUsers = async () => {
  await User.deleteMany({});
};
