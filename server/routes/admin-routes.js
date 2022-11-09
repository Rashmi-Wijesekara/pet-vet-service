const express = require("express");
const { check } = require("express-validator");

const controllers__admin = require("../controllers/admin-controllers");

const router = express.Router();

// GET api/admin
// get full list of all the admins
router.get("/", controllers__admin.getAllAdmins)

// GET api/admin/:adminId
// get admin data
router.get("/:adminId", controllers__admin.getAdminById)

// POST api/admin/
// add new admin
router.post("/", [
	check("name").not().isEmpty(),
	check("phoneNo").not().isEmpty(),
	check("email").not().isEmpty(),
	check("password").not().isEmpty()
], controllers__admin.addNewAdmin);

// GET api/admin/auth/:email/:password
// admin login
router.get("/auth/:email/:password", controllers__admin.adminLogin)

// GET api/admin/admin-log/
// return full admin log
router.get("/admin-log", controllers__admin.getAdminLog)



module.exports = router;