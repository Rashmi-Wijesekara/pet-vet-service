const express = require("express");
const { check } = require("express-validator");

const controllers__admin = require("../controllers/admin/admin-controllers");
const controllers__parameters = require("../controllers/admin/parameters-controllers");

const router = express.Router();

// GET api/admin
// get full list of all the admins
router.get("/", controllers__admin.getAllAdmins);

// GET api/admin/admin-log/
// return full admin log
router.get("/admin-log", controllers__admin.getAdminLog);

// GET api/admin/:adminId
// get admin data
router.get("/:adminId", controllers__admin.getAdminById);

// POST api/admin/
// add new admin
router.post(
	"/",
	[
		check("name").not().isEmpty(),
		check("phoneNo").not().isEmpty(),
		check("email").not().isEmpty(),
		check("password").not().isEmpty(),
	],
	controllers__admin.addNewAdmin
);

// GET api/admin/auth/:email/:password
// admin login
router.get(
	"/auth/:email/:password",
	controllers__admin.adminLogin
);

// POST api/admin/parameters/time-slot/
// router.post("/parameters/time-slot", [check("timeSlot").not().isEmpty()], controllers__parameters.setTimeSlot)

// GET api/admin/parameters/time-slot/
// return default time slot amount in mins.
router.get(
	"/parameters/time-slot",
	controllers__parameters.getTimeSlot
);

// GET api/admin/parameters/day-time/
// return default open,close time
router.get(
	"/parameters/day-time",
	controllers__parameters.getOpenCloseTime
);

// GET api/admin/parameters/day-time/:date
// return the open,close time for the given date
router.get(
	"/parameters/day-time/:date",
	controllers__parameters.getOpenCloseTimeByDate
);

// POST api/admin/parameters/day-time/
// set the open,close time for a special date
router.post(
	"/parameters/day-time",
	[
		check("date").not().isEmpty(),
		check("openAt").not().isEmpty(),
		check("closeAt").not().isEmpty(),
	],
	controllers__parameters.setSpecialOpenCloseTime
);

module.exports = router;
