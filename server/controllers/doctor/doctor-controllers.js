const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__doctor = require("../../services/doctor/doctor-service");

const getAllDoctors = (req, res, next) => {
	const allDoctors = service__doctor
		.getAllDoctors()
		.then((doctors) => {
			res.send({
				status: "OK",
				data: doctors,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

const addNewDoctor = (req, res, next) => {
	const { body } = req;

	const errors = validationResult(req);
	if (!errors.isEmpty())
		throw new HttpError(
			"Invalid inputs passed, please check your data",
			422
		);

	const doctor = {
		id: body.id,
		name: body.name,
		email: body.email,
		phoneNo: body.phoneNo,
		password: body.password,
		address: body.address,
		qualifications: body.qualifications,
	};

	const results = service__doctor
		.addNewDoctor(doctor)
		.then((addedDoctor) => {
			if (addedDoctor === "doctor id available") {
				return next(
					new HttpError(`doctor id already available`, 422)
				);
			} else if (addedDoctor === "email available") {
				return next(
					new HttpError(`email already available`, 422)
				);
			} else if (addedDoctor === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}
			return res
				.status(201)
				.send({ status: "OK", data: addedDoctor });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getDoctorById = (req, res, next) => {
	const id = req.params.doctorId;
	const data = service__doctor
		.getDoctorById(id)
		.then((doctor) => {
			if (doctor.length === 0)
				return next(
					new HttpError(
						`could not find doctor ID ${id}`,
						404
					)
				);
			res.json({
				status: "OK",
				data: doctor,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	getAllDoctors,
	addNewDoctor,
	getDoctorById,
};
