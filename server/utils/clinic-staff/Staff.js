const mongoose = require("mongoose");
const model__staff = require("../../models/clinic-staff/staff-model");
const model__staffLog = require("../../models/clinic-staff/staff-log-model");

const getAllStaff = async () => {
	return await model__staff.find(
		{},
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			position: 1,
			dateRegistered: 1,
		}
	);
};

const getStaffLog = async () => {
	return await model__staffLog.find(
		{},
		{
			staff: 1,
			loginAt: 1,
		}
	);
};

const staffLogin = async (auth) => {
	const authCheck = await model__staff.findOne({
		email: auth.email,
		position: "front desk",
	});

	const password = auth.password.toString();

	if (authCheck === null) {
		return "invalid email or position";
	} else {
		if (authCheck.validPassword(password)) {
			const timeNow = new Date();

			const log = new model__staffLog({
				staff: authCheck,
				loginAt: timeNow,
			});
			try {
				await log.save();
			} catch (e) {
				console.log(e);
				return "db error";
			}

			const staffMember = {
				id: authCheck.id,
				name: authCheck.name,
				email: authCheck.email,
				phoneNo: authCheck.phoneNo,
				dateRegistered: authCheck.dateRegistered,
				position: authCheck.position,
			};

			return staffMember;
		} else {
			return "invalid password";
		}
	}
};

const addNewStaffMember = async (add) => {
	let member = new model__staff({
		id: add.id,
		name: add.name,
		phoneNo: add.phoneNo,
		email: add.email,
		position: add.position,
		dateRegistered: add.dateRegistered,
		password: add.password,
	});

	member.setPassword(add.password);

	const emailCheck = await model__staff
		.find({ email: add.email })
		.exec();

	if (emailCheck.length > 0) {
		return "email available";
	}

	const idCheck = await model__staff
		.find({ id: add.id })
		.exec();
	if (idCheck.length > 0) {
		return "staff member id available";
	}

	try {
		await member.save();
	} catch (e) {
		console.log(e);
		return "db error";
	}

	const addedOne = {
		id: member.id,
		name: member.name,
		phoneNo: member.phoneNo,
		email: member.email,
		position: member.position,
		dateRegistered: member.dateRegistered,
	};

	return addedOne;
};

const getStaffById = async (memberId) => {
	return await model__staff.find(
		{ id: memberId },
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			position: 1,
			dateRegistered: 1,
		}
	);
};

module.exports = {
	getAllStaff,
	getStaffLog,
	staffLogin,
	addNewStaffMember,
	getStaffById,
};
