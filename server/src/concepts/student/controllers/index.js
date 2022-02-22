import { createNewStudent } from "../useCases/createNewStudent.js";

// only controllers, first layer of our app, here is a function which client trigger when send request to our server

export const createStudent = async (req, res) => {
  // some request validation

  try {
    const newStudent = await createNewStudent();
    res.send(newStudent);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
