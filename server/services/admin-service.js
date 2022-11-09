const ID = require("nodejs-unique-numeric-id-generator");
const Admin = require("../utils/Admin");

const getAllAdmins = async () => {
	const allAdmins = await Admin.getAllAdmins();
	return allAdmins;
};

const getAdminById = async (id) => {
	const admin = await Admin.getAdminById(id)
	return admin
};

const addNewAdmin = async (newAdmin) => {
	const dateRegistered = new Date()

	const adminToInsert = {
		...newAdmin,
		id: ID.generate(new Date().toJSON()), //generate unique id
		dateRegistered: dateRegistered,
		superAdmin: false
	};

	const addedAdmin = await Admin.addNewAdmin(adminToInsert);
	return addedAdmin;
};

const adminLogin = async () => {};

const getAdminLog = async () => {};

module.exports = {
	getAllAdmins,
	getAdminById,
	addNewAdmin,
	adminLogin,
	getAdminLog,
};
