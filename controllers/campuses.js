const { Campus } = require("../database/models");

const campusController = {
	getAllCampuses: getAllCampuses,
	addCampus: addCampus,
	getCampusById: getCampusById,
	updateCampusById: updateCampusById,
	deleteCampusById: deleteCampusById
};

// GET api/campuses/
async function getAllCampuses(req, res, next) {
	try {
		const campuses = await Campus.findAll();
		res.status(200).json(campuses);
	} catch (err) {
		console.log(err);
	}
}

// POST api/campuses/
async function addCampus(req, res, next) {
	try {
		const newCampus = await Campus.create(req.body);
		res.status(201).json(newCampus);
	} catch (err) {
		console.log(err);
	}
}

// GET api/campuses/:id
async function getCampusById(req, res, next) {
	try {
		const campus = await Campus.findById(req.params.id);
		if (campus) {
			res.status(200).json(campus);
		} else {
			res.status(404).send("Campus not found.");
		}
	} catch (err) {
		console.log(err);
	}
}

// PUT api/campuses/:id
async function updateCampusById(req, res, next) {
	try {
		const updatedCampus = await Campus.update(req.body, {
			where: { id: req.params.id },
			returning: true,
			plain: true
		});
		res.status(200).json(updatedCampus[1]);
	} catch (err) {
		console.log(err);
	}
}

// DELETE api/campuses/:id
async function deleteCampusById(req, res, next) {
	try {
		const campus = await Campus.destroy({
			where: { id: req.params.id }
		});
		res.sendStatus(204);
	} catch (err) {
		console.log(err);
	}
}

module.exports = campusController;
