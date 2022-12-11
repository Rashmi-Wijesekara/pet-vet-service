const ID = require("nodejs-unique-numeric-id-generator");
const Admin = require("../../utils/admin/Admin");

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

const adminLogin = async (auth) => {
	const admin = await Admin.adminLogin(auth)
	return admin
};

const getAdminLog = async () => {
	const log = await Admin.getAdminLog()
	return log
};

const getTotalCounts = async ()=> {
	const totals = await Admin.getTotalCounts()
	return totals
}

module.exports = {
	getAllAdmins,
	getAdminById,
	addNewAdmin,
	adminLogin,
	getAdminLog,
	getTotalCounts
};
