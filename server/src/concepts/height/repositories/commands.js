import Height from "../model/Height.js";

const createHeight = async (data) => {
  const newHeight = new Height({
    ...data,
  });

  try {
    await newHeight.save();
    return newHeight;
  } catch (err) {
    console.log(err);
    return "error";
  }
}

export default createHeight;