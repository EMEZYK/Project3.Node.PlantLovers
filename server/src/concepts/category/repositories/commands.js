import Category from "../model/Category.js";

const createCategory = async (data) => {
  const newCategory = new Category({
    ...data,
  });

  try {
    await newCategory.save();
    return newCategory;
  } catch (err) {
    console.log(err);
    return new Error("Category wasn't created");
  }
};

export default createCategory;
