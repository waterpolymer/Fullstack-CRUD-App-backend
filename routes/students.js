const express = require("express");
const router = express.Router();
const studentController = require("../controllers/students");

// GET api/students/
router.route("/").get(studentController.getAllStudents);
// POST api/students/
router.route("/").post(studentController.addStudent);
// GET api/students/:id
router.route("/:id").get(studentController.getStudent);
// PUT api/students/:id
router.route("/:id").put(studentController.putStudent);
// DELETE api/students/:id
router.route("/:id").delete(studentController.deleteStudent);

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
