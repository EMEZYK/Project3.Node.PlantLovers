import Category from "../model/Category.js";

export async function getCategory(categoryId) {
  const category = await Category.findById(categoryId);

  return category;
}

export async function getAllCategories() {
  const categories = await Category.find();

  return categories;
}

export async function findCategories(newCategoryName) {
  const findCategory = await Category.find({ name: newCategoryName});
  return findCategory;
}
