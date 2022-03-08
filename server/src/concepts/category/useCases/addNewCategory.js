import createCategory from "../repositories/commands.js";
import { findCategoryByName } from "../repositories/queries.js";

const addNewCategory = async (data) => {
  const existingCategory = await findCategoryByName(data.name);
  if (existingCategory) {
    throw new Error("Category already exist");
  }
  return await createCategory(data);
};

export default addNewCategory;
