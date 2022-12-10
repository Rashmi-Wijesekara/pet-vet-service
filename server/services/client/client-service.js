const ID = require("nodejs-unique-numeric-id-generator");
const Client = require("../../utils/client/Client");

const getAllClients = async () => {
	const allClients = await Client.getAllClients();
	return allClients;
};

const addNewClient = async (newClient) => {
	const dateRegistered = new Date();

	const clientToInsert = {
		...newClient,
		id: ID.generate(new Date().toJSON()),
		dateRegistered: dateRegistered,
		pets: [],
	};

	const addedClient = await Client.addNewClient(
		clientToInsert
	);
	return addedClient;
};

const getClientById = async (id) => {
	const client = await Client.getClientById(id);
	return client;
};

const getClientByPhoneNo = async (phoneNo) => {
	const client = await Client.getClientByPhoneNo(phoneNo);
	return client;
};

const addNewPatientByClientId = async (
	patientId,
	clientId
) => {
	const addedPatient = await Client.addNewPatientByClientId(
		patientId,
		clientId
	);
	return addedPatient;
};

const getPatientsByClientId = async (clientId) => {
	const patients = await Client.getPatientsByClientId(
		clientId
	);
	return patients;
};

module.exports = {
	getAllClients,
	addNewClient,
	getClientById,
	getClientByPhoneNo,
	addNewPatientByClientId,
	getPatientsByClientId,
};
