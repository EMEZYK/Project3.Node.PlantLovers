import mongoose from "mongoose";

const heightSchema = new mongoose.Schema({
  range: {
    type: String,
    required: true,
  },
});

const Height = mongoose.model("Height", heightSchema);

export default Height;
