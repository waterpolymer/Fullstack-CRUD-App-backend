const express = require("express");
const router = express.Router();
const studentController = require("../controllers/students");

router.route("/").get(studentController.getAllStudents);

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
