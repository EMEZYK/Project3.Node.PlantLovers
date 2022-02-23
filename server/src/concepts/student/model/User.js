import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  favourites: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
