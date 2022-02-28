import User from "../model/User";

const createUser = async (data) => {
  const newUser = new User({
    ...data,
  });

  try {
    await newUser.save();
    return newUser;
  } catch (err) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw new Error("Email must be unique");
    } else {
      next();
    }
  }
};

const updateUser = async (filter, data) => {
  await User.updateOne(filter, data);
};

const deleteUser = async (id) => {
  await User.deleteOne({ _id: id });
};

const deleteAllUsers = async () => {
  await User.deleteMany({});
};

export {
  createUser,
  updateUser,
  updateAllUsers,
  deleteUser,
  deleteAllUsers,
} from "commands";
