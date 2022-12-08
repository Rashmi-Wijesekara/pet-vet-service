const ID = require("nodejs-unique-numeric-id-generator");
const Staff = require("../../utils/clinic-staff/Staff")

const getAllStaff = async () => {
	const allStaff = await Staff.getAllStaff()
	return allStaff
}

const getStaffLog = async () => {
	const log = await Staff.getStaffLog()
	return log
}

const staffLogin = async (auth) => {
	const member = await Staff.staffLogin(auth)
	return member
}

const addNewStaffMember = async (newStaffMember) => {
	const dateRegistered = new Date()

	const memberToInsert = {
		...newStaffMember,
		id: ID.generate(new Date().toJSON()),
		dateRegistered: dateRegistered
	}

	const addedMember = await Staff.addNewStaffMember(memberToInsert)
	return addedMember
}

const getStaffById = async (id) => {
	const member = await Staff.getStaffById(id)
	return member
}

module.exports = {
	getAllStaff,
	getStaffLog,
	staffLogin,
	addNewStaffMember,
	getStaffById,
};
