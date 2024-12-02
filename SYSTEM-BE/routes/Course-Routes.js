const express = require("express");
// Express routing component
const router = express.Router();
const courseController = require("../controllers/Course-Controllers.js");

// Create Course
router.post("/", courseController.addCourse);

// Get all Courses
router.get("/all", courseController.getAllCourses);

// Get all Active Courses
router.get("/all/active", courseController.getAllActiveCourses);

// Get all Inactive Courses
router.get("/all/inactive", courseController.getAllInactiveCourses);

// Get all Specific Courses
router.get("/search/:courseId", courseController.getSpecificCourse);

// Get all Archive Courses
router.put("/archive/:courseId", courseController.archiveCourse);

// Get all Activated Courses
router.put("/activate/:courseId", courseController.activateCourse);


module.exports = router;