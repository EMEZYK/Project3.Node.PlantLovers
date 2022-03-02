import mongoose from "mongoose";

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      unique: true,
      match: EMAIL_REGEX,
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
      default: false,
      required: true,
    },
    favourites: {
      type: Array,
      default: [],
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
