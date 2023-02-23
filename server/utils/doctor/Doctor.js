const mongoose = require("mongoose");
const model__doctor = require("../../models/doctor/doctor-model");

const getAllDoctors = async () => {
	return await model__doctor.find(
		{},
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			address: 1,
			qualifications: 1,
			dateRegistered: 1,
		}
	);
};

const addNewDoctor = async (add) => {
	let doctor = new model__doctor({
		id: add.id,
		name: add.name,
		phoneNo: add.phoneNo,
		email: add.email,
		address: add.address,
		qualifications: add.qualifications,
		dateRegistered: add.dateRegistered,
		password: add.password,
	});

	doctor.setPassword(add.password);

	const emailCheck = await model__doctor
		.find({ email: add.email })
		.exec();
	if (emailCheck.length > 0) {
		return "email available";
	}

	const idCheck = await model__doctor
		.find({ id: add.id })
		.exec();
	if (idCheck.length > 0) {
		return "doctor id available";
	}

	try {
		await doctor.save();
	} catch (e) {
		console.log(e);
		return "db error";
	}

	const addedOne = {
		id: doctor.id,
    name: doctor.name,
		phoneNo: doctor.phoneNo,
		email: doctor.email,
    address: doctor.address,
		qualifications: doctor.qualifications,
		dateRegistered: doctor.dateRegistered,
	}
	
	return addedOne
};

const getDoctorById = async (id) => {
	return await model__doctor.find(
		{ id: id },
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			address: 1,
			qualifications: 1,
			dateRegistered: 1,
		}
	);
};

module.exports = {
	getAllDoctors,
	addNewDoctor,
	getDoctorById,
};
