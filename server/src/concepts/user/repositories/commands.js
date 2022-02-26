import User from "../model/User";

const createUser = (data) => {
  const newUser = new User({
    ...data,
  });

  try {
    newUser.save();
    return newUser;
  } catch (err) {
    console.log(err);
    return "error";
  }
};

const updateUser = () => {
  User.updateOne({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated: ", result);
    }
  });
};

const updateAllUsers = () => {
  User.updateMany({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated: ", result);
    }
  });
};

const deleteUser = () => {
  User.deleteOne({})
    .then(function () {
      console.log("User deleted");
    })
    .catch(function (error) {
      console.log(error);
    });
};

const deleteAllUsers = () => {
  User.deleteMany({})
    .then(function () {
      console.log("Users deleted");
    })
    .catch(function (error) {
      console.log(error);
    });
};

export {
  createUser,
  updateUser,
  updateAllUsers,
  deleteUser,
  deleteAllUsers,
} from "commands";
