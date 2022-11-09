const { validationResult } = require("express-validator");
const service__admin = require("../services/admin-service")

const getAllAdmins = (req,res) => {
	const allAdmins = service__admin.getAllAdmins().then((admins)=> {
		res.send({
			status: "OK",
			data: admins
		})
	}).catch((err)=> {
		console.log(err)
	})
}

const getAdminById = (req, res, next) => {};

const addNewAdmin = (req, res, next) => {};

const adminLogin = (req, res, next) => {};

const getAdminLog = (req, res, next) => {};

module.exports = {
	getAllAdmins,
	getAdminById,
	addNewAdmin,
	adminLogin,
	getAdminLog,
};