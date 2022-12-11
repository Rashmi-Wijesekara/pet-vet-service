const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__patient = require("../../services/patient/patient-service");

const getAllPatients = (req, res, next) => {
	const allPatients = service__patient
		.getAllPatients()
		.then((patients) => {
			res.send({
				status: "OK",
				data: patients,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

const addNewPatient = (req, res, next) => {
	const { body } = req;
	const errors = validationResult(req);
	if (!errors.isEmpty())
		throw new HttpError(
			"Invalid inputs passed, please check your data",
			422
		);

	const patient = {
		name: body.name,
		gender: body.gender,
		type: body.type,
		breed: body.breed,
		dob: body.dob,
		client: body.client,
	};

	const results = service__patient
		.addNewPatient(patient)
		.then((addedPatient) => {
			if (addedPatient === "patient id already available") {
				return next(new HttpError(addedPatient, 422));
			} 
			else if(addedPatient === "patient already available"){
				return next(new HttpError(addedPatient, 422));
			}
			else if(addedPatient === "invalid client id"){
				return next(new HttpError(addedPatient, 422));
			}
			else if (addedPatient === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: addedPatient });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getPatientById = (req, res, next) => {
	const id = req.params.patientId;
	const data = service__patient
		.getPatientById(id)
		.then((patient) => {
			if (patient.length === 0) {
				return next(
					new HttpError(
						`could not find patient ID ${id}`,
						404
					)
				);
			}

			res.json({
				status: "OK",
				data: patient,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	getAllPatients,
	addNewPatient,
	getPatientById,
};
