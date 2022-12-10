const express = require("express");
const { check } = require("express-validator");

const controllers__client = require("../controllers/client/client-controllers");

const router = express.Router();

// GET api/client
// get full list of all the clients details
router.get("/", controllers__client.getAllClients);

// POST api/client
// add new client by frontdesk
router.post(
	"/",
	[
		check("name").not().isEmpty(),
		check("phoneNo").not().isEmpty(),
		check("address").not().isEmpty(),
	],
	controllers__client.addNewClient
);

// POST api/client/patients
// add new patient for the given client
router.post(
	"/patients",
	controllers__client.addNewPatientByClientId
);

// GET api/client/phoneNo/:phoneNo
// get details of the client of given phone number
router.get(
	"/phoneNo/:phoneNo",
	controllers__client.getClientByPhoneNo
);

// GET api/client/:clientId/patients
// get array of patients for the given client id
router.get(
	"/:clientId/patients",
	controllers__client.getPatientsByClientId
);

// GET api/client/:clientId
// get details of given client
router.get("/:clientId", controllers__client.getClientById);

module.exports = router;
