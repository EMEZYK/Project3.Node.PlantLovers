import addNewHeight from "../model/UserValidation.js";
import validateCreateHeight from "../model/HeightValitadtion";

export const createHeight = async (req, res) => {
  const validationHeight = validateCreateHeight(req.body);
  if (validationHeight.error) {
    return res.status(400).send("Invalid data");
  }
  try {
    await addNewHeight(req.body);
    return res.status(200).send(`Height added!`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};