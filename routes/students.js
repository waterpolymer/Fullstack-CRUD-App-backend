const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/students");

router.route("/").get(StudentController.getAllStudents);

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
