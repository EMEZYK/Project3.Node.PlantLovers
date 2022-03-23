import addNewCategory from "../useCases/addNewCategory.js";
import validateCreateCategory from "../model/CategoryValidation.js";
import { getAllCategories } from "../repositories/queries.js";

export const createCategory = async (req, res) => {
  const { error } = validateCreateCategory(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    await addNewCategory(req.body);
    return res.status(200).send(`Category created`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getCategories = async (req, res) => {
  try {
    const allCategories = await getAllCategories();
    if (!allCategories) return res.status(404).send("No category found!");
    return res.status(200).send(allCategories);
  } catch (error) {
    return res.status.send(500).send(error.message);
  }
};
