const express = require("express");
const { check } = require("express-validator");

const controllers__patient = require("../controllers/patient/patient-controllers");

const router = express.Router();

// GET api/patient
// get full list of all the patients' details
router.get("/", controllers__patient.getAllPatients);

// GET api/patient/:patientId
// get a specific patient's data
router.get(
	"/:patientId",
	controllers__patient.getPatientById
);

// POST api/patient
// add new patient
router.post(
	"/",
	[
		check("type").not().isEmpty()
	],
	controllers__patient.addNewPatient
);

module.exports = router;
