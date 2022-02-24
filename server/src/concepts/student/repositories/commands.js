import Student from "../model/Student.js";

// Place for commands: creating, updating, deleting data
export function createStudent(data) {
  const newStudent = new Student({
    ...data,
  });

  try {
    newStudent.save();
    return newStudent;
  } catch (err) {
    console.log(err);
    return "error";
  }
}
