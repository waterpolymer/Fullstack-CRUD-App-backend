const { Student } = require("../database/models");

const studentController = {
	getAllStudents: getAllStudents,
	addStudent: addStudent
};

// GET api/students/
async function getAllStudents(req, res, next) {
	try {
		const students = await Student.findAll();
		res.status(200).json(students);
	} catch (err) {
		console.log(err);
	}
}

// POST api/students/
async function addStudent(req, res, next) {
	try {
		const newStudent = await Student.create(req.body);
		res.status(201).json(newStudent);
	} catch (err) {
		console.log(err);
	}
}

module.exports = studentController;
