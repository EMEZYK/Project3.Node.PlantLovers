import User from "../model/User";

const createUser = (data) => {
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

const updateUser = () => {
  await User.updateOne({ name: "super_name" }, { fieldToUpdate: "new_value" });
};

const deleteUser = () => {
  await User.deleteOne({ _id: "ObjectId" });
};

const deleteAllUsers = () => {
  await User.deleteMany({});
};

export {
  createUser,
  updateUser,
  updateAllUsers,
  deleteUser,
  deleteAllUsers,
} from "commands";
