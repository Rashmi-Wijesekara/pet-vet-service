const mongoose = require("mongoose");
const { forEach } = require("p-iteration");
const datetime = require("../../functions/DateTime");

const model__admin = require("../../models/admin/admin-model");
const model__adminLog = require("../../models/admin/admin-log-model");
const model__client = require("../../models/client/client-model");
const model__staff = require("../../models/clinic-staff/staff-model");
const model__patient = require("../../models/patient/patient-model");
const model__doctor = require("../../models/doctor/doctor-model");

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
	const authCheck = await model__admin.findOne({
		email: auth.email,
	});

	const password = auth.password.toString();

	if (authCheck === null) {
		return "invalid email";
	} else {
		// valid email and password
		if (authCheck.validPassword(password)) {
			// add record to the admin log
			const timeNow = new Date();

			const log = new model__adminLog({
				admin: authCheck,
				loginAt: timeNow,
			});
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
				superAdmin: authCheck.superAdmin,
			};
			return admin;
		} else {
			return "invalid password";
		}
	}
};

const getAdminLog = async () => {
	const logs = await model__adminLog
		.find(
			{},
			{
				admin: 1,
				loginAt: 1,
			}
		)
		.sort({ loginAt: -1 })
		.exec();

	let logsData = [];

	await forEach(logs, async (item) => {
		const admin = await model__admin
			.findById(
				{ _id: item.admin },
				{
					id: 1,
				}
			)
			.exec();

		const logintime = datetime.formatDate(item.loginAt);

		logsData.push({
			admin: admin.id,
			loginAt: logintime,
		});
	});

	return logsData;
};

const getTotalCounts = async () => {
	let patientsCount, clientsCount, doctorsCount, staffCount;

	clientsCount = await model__client.countDocuments({});
	staffCount = await model__staff.countDocuments({});
	patientsCount = await model__patient.countDocuments({});
	doctorsCount = await model__doctor.countDocuments({});

	const result = {
		clients: clientsCount,
		patients: patientsCount,
		staff: staffCount,
		doctors: doctorsCount,
	};
	return result;
};

module.exports = {
	getAllAdmins,
	getAdminById,
	addNewAdmin,
	adminLogin,
	getAdminLog,
	getTotalCounts,
};
