const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__client = require("../../services/client/client-service");

const getAllClients = (req, res, next) => {
	const allClients = service__client
		.getAllClients()
		.then((clients) => {
			res.send({
				status: "OK",
				data: clients,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

const addNewClient = (req, res, next) => {
	const { body } = req;
	const errors = validationResult(req);
	if (!errors.isEmpty())
		throw new HttpError(
			"Invalid inputs passed, please check your data",
			422
		);

	const client = {
		name: body.name,
		phoneNo: body.phoneNo,
		email: body.email,
		address: body.address,
	};

	const results = service__client
		.addNewClient(client)
		.then((addedClient) => {
			if (addedClient === "client-id available") {
				return next(
					new HttpError(`client ID already available`, 422)
				);
			} else if (addedClient === "email available") {
				return next(
					new HttpError(
						`client email already available`,
						422
					)
				);
			} else if (addedClient === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: addedClient });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getClientById = (req, res, next) => {
	const id = req.params.clientId;
	const data = service__client
		.getClientById(id)
		.then((client) => {
			if(client.length === 0){
				return next(
					new HttpError(
						`could not find client ID ${id}`,
						404
					)
				);
			}
			res.json({
				status: "OK",
				data: client,
			});
		});
};

const getClientByPhoneNo = (req, res, next) => {};

const addNewPatientByClientId = (req, res, next) => {};

const getPatientByClientId = (req, res, next) => {};

module.exports = {
	getAllClients,
	addNewClient,
	getClientById,
	getClientByPhoneNo,
	addNewPatientByClientId,
	getPatientByClientId,
};
