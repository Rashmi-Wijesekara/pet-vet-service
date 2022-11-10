const mongoose = require("mongoose");
const model__admin = require("../../models/admin/admin-model");
const model__adminLog = require("../../models/admin/admin-log-model")

// get full admin data
const getAllAdmins = async () => {
	return await model__admin.find(
		{},
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			dateRegistered: 1,
			superAdmin: 1,
		}
	);
};

const getAdminById = async (adminId) => {
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
};

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

	admin.setPassword(add.password);

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
	const addedOne = {
		id: admin.id,
		name: admin.name,
		email: admin.email,
		phoneNo: admin.phoneNo,
		dateRegistered: admin.dateRegistered,
		superAdmin: admin.superAdmin,
	};
	
	return addedOne;
};

const adminLogin = async (auth) => {
	const authCheck = await model__admin.findOne(
		{ email: auth.email }
	);
	
	const password = auth.password.toString()

	if (authCheck === null) {
		return "invalid email";
	} else {
		// valid email and password
		if (authCheck.validPassword(password)) {

			// add record to the admin log
			const timeNow = new Date()

			const log = new model__adminLog({
				admin: authCheck,
				loginAt: timeNow
			})
			try {
				await log.save();
			} catch (e) {
				console.log(e);
				return "db error";
			}

			const admin = {
				id: authCheck.id,
				name: authCheck.name,
				email: authCheck.email,
				phoneNo: authCheck.phoneNo,
				dateRegistered: authCheck.dateRegistered,
				superAdmin: authCheck.superAdmin
			}
			return admin;
		} else {
			return "invalid password";
		}
	}
};

const getAdminLog = async () => {
	return await model__adminLog.find({}, {
		admin: 1,
		loginAt: 1
	})
};

module.exports = {
	getAllAdmins,
	getAdminById,
	addNewAdmin,
	adminLogin,
	getAdminLog,
};
