const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	name: {
		type: Sequelize.VIRTUAL,
		get() {
			return (
				this.getDataValue("firstName") + " " + this.getDataValue("lastName")
			);
		}
	},
	imageUrl: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	},
	gpa: {
		type: Sequelize.DECIMAL,
		validate: {
			min: 0.0,
			max: 4.0
		}
	}
});

module.exports = Student;
