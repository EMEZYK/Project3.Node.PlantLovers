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
    return await addCategory.save();
  } catch (err) {
    console.log(err);
    return new Error("Category wasn't added");
  }
};

export default addNewCategory;
