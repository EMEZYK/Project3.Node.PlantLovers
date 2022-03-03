import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
