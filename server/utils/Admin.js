const mongoose = require("mongoose");
const model__admin = require("../models/admin-model")

// get full admin data
const getAllAdmins = async()=> {
	return await model__admin.find(
		{},
		{ id:1, name:1, phoneNo:1, email:1, dateRegistered:1, superAdmin:1}
	)
}

const getAdminById = async(adminId) => {
	return await model__admin.find(
		{ id: adminId },
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			dateRegistered: 1,
			superAdmin: 1,
		}
	);
}

const addNewAdmin = async (add) => {
	let admin = new model__admin({
		id: add.id,
		name: add.name,
		phoneNo: add.phoneNo,
		email: add.email,
		superAdmin: add.superAdmin,
		dateRegistered: add.dateRegistered,
		password: add.password,
	});

	admin.setPassword(add.password)

	const emailCheck = await model__admin
		.find({ email: add.email })
		.exec();

	if (emailCheck.length > 0) {
		return "email available";
	}

	const idCheck = await model__admin
		.find({ id: add.id })
		.exec();

	if (idCheck.length > 0) {
		// given admin id is already taken by another employee
		return "admin-id available";
	}

	try {
		await admin.save();
	} catch (e) {
		console.log(e);
		return "db error";
	}
	return admin;
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