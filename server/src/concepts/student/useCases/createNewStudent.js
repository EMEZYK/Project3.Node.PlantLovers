import { createStudent } from "../repositories/commands.js";

export async function createNewStudent(login, email) {
  // some other validation...

  // maybe things we need to do before saving into DB (password hash or something else)

  // some other cases, maybe update other collections in DB

  // maybe send some email notification

  // etc..
  try {
    const student = await createStudent({
      login: login,
      email: email,
      // ... etc
    });

    return student;
  } catch (err) {
    console.log(err);
    return "error";
  }
}
