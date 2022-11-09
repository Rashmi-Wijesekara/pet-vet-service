const mongoose = require("mongoose");
const model__admin = require("../models/admin-model")

// get full admin data
const getAllAdmins = async()=> {
	return await model__admin.find(
		{},
		{ id:1, name:1, phoneNo:1, dateRegistered:1, superAdmin:1}
	)
}

const getAdminById = async() => {}

const addNewAdmin = async () => {};

const adminLogin = async () => {};

const getAdminLog = async () => {};

module.exports = {
	getAllAdmins,
	getAdminById,
	addNewAdmin,
	adminLogin,
	getAdminLog,
};