const express = require("express");
const { check } = require("express-validator");

const controllers__client = require("../controllers/client/client-controllers")

const router = express.Router();

// GET api/client
// get full list of all the clients details
router.get("/", controllers__client.getAllClients)

// POST api/client
// add new client by frontdesk
router.post(
	"/",
	[
		check("name").not().isEmpty(),
		check("phoneNo").not().isEmpty(),
		check("address").not().isEmpty()
	],
	controllers__client.addNewClient
);

// GET api/client/:clientId
// get details of given client
router.get("/:clientId", controllers__client.getClientById)

// POST api/client/patients
// add new patient for the given client
router.post("/patients", controllers__client.addNewPatientByClientId)

// GET api/client/:clientId/patients
router.get("/:clientId/patients", controllers__client.getPatientByClientId)

module.exports = router;
