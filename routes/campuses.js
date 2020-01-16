const express = require("express");
const router = express.Router();
const campusController = require("../controllers/campuses");

// GET api/campuses/
router.route("/").get(campusController.getAllCampuses);

// POST api/campuses/
router.route("/").post(campusController.addCampus);

// PUT api/campuses/:id
router.route("/:id").put(campusController.updateCampusById);

// DELETE api/campuses/:id
router.route("/:id").delete(campusController.deleteCampusById);

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
