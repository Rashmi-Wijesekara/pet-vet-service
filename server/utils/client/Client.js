const mongoose = require("mongoose");
const model__client = require("../../models/client/client-model");

const getAllClients = async () => {
	return await model__client.find(
		{},
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			address: 1,
			dateRegistered: 1,
			superAdmin: 1,
		}
	);
};

const addNewClient = async (add) => {
	let client = new model__client({
		id: add.id,
		name: add.name,
		phoneNo: add.phoneNo,
		email: add.email,
		address: add.address,
		dateRegistered: add.dateRegistered,
		pets: add.pets,
	});

	const emailCheck = await model__client
		.find({ email: add.email })
		.exec();

	if (emailCheck.length > 0) {
		return "email available";
	}

	const phoneNoCheck = await model__client
		.find({ phoneNo: add.phoneNo })
		.exec();

	if (phoneNoCheck.length > 0) return "phoneNo available";

	const idCheck = await model__client
		.find({ id: add.id })
		.exec();

	if (idCheck.length > 0) {
		return "client-id available";
	}

	try {
		await client.save();
	} catch (e) {
		console.log(e);
		return "db error";
	}

	const addedOne = {
		id: client.id,
		name: client.name,
		email: client.email,
		phoneNo: client.phoneNo,
		address: client.address,
		dateRegistered: client.dateRegistered,
		pets: client.pets,
	};

	return addedOne;
};

const getClientById = async (clientId) => {
	return await model__client.find(
		{ id: clientId },
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			address: 1,
			dateRegistered: 1,
			pets: 1,
		}
	);
};

const getClientByPhoneNo = async (phoneNo) => {
	return await model__client.find(
		{ phoneNo: phoneNo },
		{
			id: 1,
			name: 1,
			phoneNo: 1,
			email: 1,
			address: 1,
			dateRegistered: 1,
			pets: 1,
		}
	);
};

const addNewPatientByClientId = async (
	patientId,
	clientId
) => {
	const availableClient = await getClientById(clientId);

	if (availableClient.length === 0) {
		return "client id not available";
	}

	// TODO: after adding new patient through the /api/patient route,
	// add the new patient id into relevant clients pets array

	// TODO: check patientId validation
	// if no, return patient id not available

	const petsList = await model__client.findOne(
		{ id: clientId },
		{ pets: 1 }
	);

	if (petsList.pets.includes(patientId)) {
		return "patient already exists";
	}

	const addingList = [...petsList.pets, patientId];

	await model__client.updateOne(
		{ id: clientId },
		{ $set: { pets: addingList } }
	);

	const updated = await model__client.findOne({id: clientId}).exec()

	return updated
};

const getPatientsByClientId = async (clientId) => {
	const availableClient = await getClientById(clientId);

	if (availableClient.length === 0) {
		return "client id not available";
	}

	const patients = await model__client.findOne(
		{ id: clientId },
		{ pets: 1 }
	);

	return patients.pets;
};

module.exports = {
	getAllClients,
	addNewClient,
	getClientById,
	getClientByPhoneNo,
	addNewPatientByClientId,
	getPatientsByClientId,
};
