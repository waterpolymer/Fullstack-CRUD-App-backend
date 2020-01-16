const express = require("express");
const router = express.Router();
const studentController = require("../controllers/students");

// GET api/students/
router.route("/").get(studentController.getAllStudents);
// POST api/students/
router.route("/").post(studentController.addStudent);

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
