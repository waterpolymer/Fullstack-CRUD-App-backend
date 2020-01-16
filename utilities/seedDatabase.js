const { Student, Campus } = require("../database/models");

const seedDatabase = async () => {
	await Promise.all([
		Campus.create({
			name: "Hunter College",
			email: "hunter@gmail.com",
			location: "NYC, NY",
			imageUrl:
				"https://s29068.pcdn.co/wp-content/uploads/hunter-new-york-city-street-view.jpg"
		}),
		Student.create({
			firstName: "Kun",
			lastName: "Yu",
			imageUrl:
				"https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			email: "kun@gmail.com",
			gpa: 4.0,
			campusId: 1
		}),
		Student.create({
			firstName: "Jordan",
			lastName: "Yaqoob",
			imageUrl:
				"https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			email: "jordan@gmail.com",
			gpa: 4.0,
			campusId: 1
		}),
		Student.create({
			firstName: "Kendrick",
			lastName: "Shao",
			imageUrl:
				"https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			email: "kendrick@gmail.com",
			gpa: 4.0,
			campusId: 1
		}),
		Student.create({
			firstName: "Sami",
			lastName: "Beig",
			imageUrl:
				"https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			email: "sami@gmail.com",
			gpa: 4.0,
			campusId: 1
		})
	]);
};

module.exports = seedDatabase;
