const { Student, Campus } = require("../database/models");

const seedDatabase = async () => {
	await Promise.all([
		Student.create({
			firstName: "Kun",
			lastName: "Yu",
			image_URL: "https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			email: "kun@gmail.com"
		}),
		Student.create({
			firstName: "Jordan",
			lastName: "Yaqoob",
			image_URL: "https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			email: "jordan@gmail.com"
		}),
		Student.create({
			firstName: "Kendrick",
			lastName: "Shao",
			image_URL: "https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			email: "kendrick@gmail.com"
		}),
		Student.create({
			firstName: "Sami",
			lastName: "Beig",
			image_URL: "https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			email: "sami@gmail.com"
		}),
		Campus.create({
			name: "Hunter College",
			email: "hunter@gmail.com",
			location: "NYC, NY",
			image_URL: "https://s29068.pcdn.co/wp-content/uploads/hunter-new-york-city-street-view.jpg"
		})
	]);
};

module.exports = seedDatabase;
