import Student from '../model/Student.js';

// Place for queries: get Items from DB
export async function getStudent(studentId) {
    const student = await Student.findById(studentId);
    
    return student;
}

export async function getAllstudents(options) {

    console.log(options);

    const students = await Student.find();
    
    return students;
}