const { Student } = require("../database/models");

const studentController = {
	getAllStudents: getAllStudents
};

async function getAllStudents(req, res, next) {
	try {
		const students = await Student.findAll();
		res.json(students);
	} catch (err) {
		console.log(err);
	}
}

module.exports = studentController;
