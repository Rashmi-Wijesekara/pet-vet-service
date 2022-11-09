const Admin = require("../utils/Admin")

const getAllAdmins = async () => {
	const allAdmins = await Admin.getAllAdmins();
	return allAdmins;
};

const getAdminById = async () => {}

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