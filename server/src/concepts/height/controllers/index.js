import addNewHeight from "../useCases/addNewHeight.js";
import validateCreateHeight from "../model/HeightValidation.js";
import { getAllHeights } from "../repositories/queries.js";

export const createHeight = async (req, res) => {
  const { error } = validateCreateHeight(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    await addNewHeight(req.body);
    return res.status(200).send(`Height added!`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getHeights = async (req, res) => {
  try {
    const allHeights = await getAllHeights();
    if (!allHeights) return res.status(404).send("No height found!");
    return res.status(200).send(allHeights);
  } catch (error) {
    return res.status.send(500).send(error.message);
  }
};
