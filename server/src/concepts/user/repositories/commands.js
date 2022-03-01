import User from "../model/User";

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

export const updateUser = async (filter, data) => {
  await User.updateOne(filter, data);
};

export const deleteUser = async (id) => {
  await User.deleteOne({ _id: id });
};

export const deleteAllUsers = async () => {
  await User.deleteMany({});
};
