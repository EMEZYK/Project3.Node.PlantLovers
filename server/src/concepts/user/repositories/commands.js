import User from "../model/User.js";

export const createUser = async (data) => {
  const newUser = new User({
    ...data,
  });

  try {
    const saveUser = await newUser.save();
    return saveUser;
  } catch (err) {
    if (err.name === "MongoServerError" && err.code === 11000) {
      throw new Error("Email must be unique");
    } else {
      console.log(err);
    }
  }
};

export const updateUserById = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });
};

export const deleteUser = async (id) => {
  await User.deleteOne({ _id: id });
};

export const deleteAllUsers = async () => {
  await User.deleteMany({});
};
