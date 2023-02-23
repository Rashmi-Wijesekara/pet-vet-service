const express = require("express");
const { check } = require("express-validator");

const controllers__staff = require("../controllers/clinic-staff/staff-controllers");

const router = express.Router();

// GET api/staff
// get full list of all the staff members
router.get("/", controllers__staff.getAllStaff);

// GET api/staff/staff-log
// return full staff log
router.get("/staff-log", controllers__staff.getStaffLog);

// GET api/staff/auth/:email/:password
// staff member login
router.get(
	"/auth/:email/:password",
	controllers__staff.staffLogin
);

// POST api/staff
// add new staff member
router.post(
	"/",
	[
		check("name").not().isEmpty(),
		check("position").not().isEmpty(),
		check("phoneNo").not().isEmpty(),
		check("email").not().isEmpty(),
		// get password for frontdesk staff member
	],
	controllers__staff.addNewStaffMember
);

// GET api/staff/:staffId
// get staff member data
router.get("/:staffId", controllers__staff.getStaffById);

module.exports = router;
