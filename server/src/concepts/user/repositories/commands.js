import User from "../model/User.js";

export const createUser = async (data) => {
  const newUser = new User({
    ...data,
  });

  try {
    await newUser.save();
    return newUser;
  } catch (err) {
    if (err.name === "MongoServerError" && err.code === 11000) {
      throw new Error("Email must be unique");
    } else {
      console.log(err);
    }
  }
};

export const updateUserById = async (id, data) => {
  await User.findByIdAndUpdate(id, data, { runValidators: true, new: true });
};

export const deleteUser = async (id) => {
  await User.deleteOne({ _id: id });
};

export const deleteAllUsers = async () => {
  await User.deleteMany({});
};
