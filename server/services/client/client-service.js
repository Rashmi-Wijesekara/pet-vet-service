const ID = require("nodejs-unique-numeric-id-generator");
const Client = require("../../utils/client/Client")

const getAllClients = async () => {
	const allClients = await Client.getAllClients()
	return allClients
}

const addNewClient = async (newClient) => {
	const dateRegistered = new Date()

	const clientToInsert = {
		...newClient,
		id: ID.generate(new Date().toJSON()),
		dateRegistered: dateRegistered,
		pets: []
	};

	const addedClient = await Client.addNewClient(clientToInsert)
	return addedClient
};

const getClientById = async (id) => {
	const client = await Client.getClientById(id)
	return client
};

const getClientByPhoneNo = async (phoneNo)=> {}

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