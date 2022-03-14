import createHeight from "../repositories/commands.js";
import { findHeightByValue } from "../repositories/queries.js";

const addNewHeight = async (data) => {
  const existingHeight = await findHeightByValue(data.name);
  if (existingHeight) {
    throw new Error("Height already exist");
  }
  return await createHeight(data);
};

export default addNewHeight;
