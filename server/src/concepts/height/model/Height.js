import mongoose from "mongoose";

const heightSchema = new mongoose.Schema({
  range: {
    type: String,
    required: true,
    min: 3,
    max: 7,
  },
});

const Height = mongoose.model("Height", heightSchema);

export default Height;
