const express = require("express");
const { check } = require("express-validator");

const controllers__doctor = require("../controllers/doctor/doctor-controllers")

const router = express.Router();

// GET api/doctor
// get full list of all the doctors' details
router.get("/", controllers__doctor.getAllDoctors)

// GET api/doctor/:doctorId
// get a specific doctor's data
router.get("/:doctorId", controllers__doctor.getDoctorById)

// POST api/doctor
// add new doctor
router.post(
	"/",
	[
		check("name").not().isEmpty(),
		check("phoneNo").not().isEmpty(),
		check("email").not().isEmpty(),
		check("password").not().isEmpty(),
	],
	controllers__doctor.addNewDoctor
);

module.exports = router;