import createHeight from "../repositories/commands.js";

const addNewHeight = async (data) => {
  const addHeight = await createHeight({
    ...data,
  });

  try {
    await addHeight.save();
    return addHeight;
  } catch (err) {
    console.log(err);
  }
};

export default addNewHeight;