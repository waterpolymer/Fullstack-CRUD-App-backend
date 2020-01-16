const { Student } = require("../database/models");

async function getAllStudents(req, res, next) {
	try {
		const students = await Student.findAll();
		res.json(students);
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	getAllStudents: getAllStudents
};
