import createCategory from "../repositories/commands.js";
import { findCategoryByName } from "../repositories/queries.js";

const addNewCategory = async (data) => {
  const existingCategory = await findCategoryByName(data.name);
  if (existingCategory) {
    throw new Error("Category already exist");
  }
  const addCategory = await createCategory({
    ...data,
  });

  try {
    await addCategory.save();
    return addCategory;
  } catch (err) {
    console.log(err);
  }
};

export default addNewCategory;
