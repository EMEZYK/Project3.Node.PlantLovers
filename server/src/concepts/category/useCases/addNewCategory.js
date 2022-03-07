import createCategory from "../repositories/commands";
import findCategories from "../repositories/queries";

const addNewCategory = async (data) => {
  const existingCategory = await findCategories();
  if (existingCategory) {
    throw new Error("Category already exist");
  }
  const addCategory = new createCategory({
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
