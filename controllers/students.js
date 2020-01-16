const { Student, Campus } = require("../database/models");

const studentController = {
	getAllStudents: getAllStudents,
	addStudent: addStudent,
	putStudent: putStudent,
	deleteStudent: deleteStudent
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

// PUT api/students/:id
async function putStudent(req, res, next) {
	try {
		let updatedStudentInfo = await Student.update(req.body, {
			where: { id: req.params.id },
			returning: true,
			plain: true
		});
		res.status(200).json(updatedStudentInfo[1]);
	} catch (err) {
		next(err);
	}
}

// DELETE api/students/:id
async function deleteStudent(req, res, next) {
	try {
		const deleteCount = await Student.destroy({
			where: { id: req.params.id }
		});
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
}

module.exports = studentController;
