const mongoose = require("mongoose");
const model__patient = require("../../models/patient/patient-model");
const clientsData = require("../client/Client");

const getAllPatients = async () => {
	return await model__patient.find(
		{},
		{
			id: 1,
			name: 1,
			gender: 1,
			type: 1,
			breed: 1,
			dob: 1,
			dateRegistered: 1,
			client: 1,
		}
	);
};

const getPatientById = async (id) => {
	return await model__patient.find(
		{ id: id },
		{
			id: 1,
			name: 1,
			gender: 1,
			type: 1,
			breed: 1,
			dob: 1,
			dateRegistered: 1,
			client: 1,
		}
	);
};

const addNewPatient = async (add) => {
	let patient = new model__patient({
		id: add.id,
		name: add.name,
		gender: add.gender,
		type: add.type,
		breed: add.breed,
		dob: add.dob,
		dateRegistered: add.dateRegistered,
		client: add.client,
	});

	if (add.client && add.name && add.type) {
		const check = await model__patient
			.find({
				client: add.client,
				name: add.name,
				gender: add.gender,
				type: add.type,
			})
			.exec();

		if (check.length > 0) {
			return "patient already available";
		}
	}

	const idCheck = await model__patient
		.find({ id: add.id })
		.exec();

	if (idCheck.length > 0) {
		return "patient id already available";
	}

	if (patient.client) {
		const clientHandler = await clientsData.addNewPatientByClientId(patient.id, patient.client)
		
		if(clientHandler === "client id not available" || clientHandler === "patient already exists"){
			return clientHandler
		}
	}

	try {
		await patient.save();
	} catch (e) {
		console.log(e);
		return "db error";
	}

	return patient;
};

module.exports = {
	getAllPatients,
	addNewPatient,
	getPatientById,
};
