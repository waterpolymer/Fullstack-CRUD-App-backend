const { Student } = require("../database/models");

const seedDatabase = async () => {
	await Promise.all([
		Student.create({
			firstName: "Kun",
			lastName: "Yu"
		}),
		Student.create({
			firstName: "Jordan",
			lastName: "Yaqoob"
		}),
		Student.create({
			firstName: "Kendrick",
			lastName: "Shao"
		}),
		Student.create({
			firstName: "Sami",
			lastName: "Beig"
		})
	]);
};

module.exports = seedDatabase;
