import User from "../model/User.js";

export const createUser = async (data) => {
  const newUser = new User({
    ...data,
  });

  try {
    const savedUser = await newUser.save();
    return {
      email: savedUser.email,
      isAdmin: savedUser.isAdmin,
      phoneNumber: savedUser.phoneNumber,
      city: savedUser.city,
      isActive: savedUser.false,
      favourites: savedUser.favourites,
      _id: savedUser.id,
    };
  } catch (err) {
    if (err.name === "MongoServerError" && err.code === 11000) {
      throw new Error("Email must be unique");
    } else {
      console.log(err);
    }
  }
};

export const updateUserById = async (id, data) => {
  try {
    const foundUser = await User.findByIdAndUpdate(id, data, {
      runValidators: true,
      new: true,
    });
    return {
      email: foundUser.email,
      isAdmin: foundUser.isAdmin,
      phoneNumber: foundUser.phoneNumber,
      city: foundUser.city,
      isActive: foundUser.false,
      favourites: foundUser.favourites,
      _id: foundUser.id,
    };
  } catch (err) {
    throw new Error("User wasn't found");
  }
};

export const deleteUser = async (id) => {
  return await User.deleteOne({ _id: id });
};

export const deleteAllUsers = async () => {
  await User.deleteMany({});
};
