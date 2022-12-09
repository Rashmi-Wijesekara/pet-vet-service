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
	}

	return addedOne
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
			pets: 1
		}
	);
};

const getClientByPhoneNo = async (phoneNo) => {};

const addNewPatientByClientId = async () => {};

const getPatientByClientId = async () => {};

module.exports = {
	getAllClients,
	addNewClient,
	getClientById,
	getClientByPhoneNo,
	addNewPatientByClientId,
	getPatientByClientId,
};
