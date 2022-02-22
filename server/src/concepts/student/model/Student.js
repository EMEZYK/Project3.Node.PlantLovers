import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    minlenghth: 5,
    maxlenghth: 50,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 255,
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
