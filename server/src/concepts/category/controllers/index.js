import addNewCategory from "../useCases/addNewCategory.js";
import validateCreateCategory from "../model/CategoryValidation.js";

export const createCategory = async (req, res) => {
  const validationCategory = validateCreateCategory();
  if (validationCategory.error) {
    return res.status(400).send("Invalid data");
  }
  try {
    await addNewCategory();
    return res.status(200).send(`Category created`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
