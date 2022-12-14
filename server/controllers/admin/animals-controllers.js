const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__animals = require("../../services/admin/animals-service");

const addBreed = (req, res, next) => {
	const { body } = req;
	const errors = validationResult(req);
	if (!errors.isEmpty())
		throw new HttpError(
			"Invalid inputs passed, please check your data",
			422
		);

	const type = body.type;
	const breeds = body.breeds;

	const added = service__animals
		.addBreed(type, breeds)
		.then((result) => {
			if (result === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getAllAnimals = (req, res, next) => {
	const allAnimals = service__animals
		.getAllAnimals()
		.then((result) => {
			if (result === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getBreedsByAnimal = (req, res, next) => {
	const type = req.params.type;
	const call = service__animals
		.getBreedsByAnimal(type)
		.then((result) => {
			if (result === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}else if(result === "invalid type"){
				return next(
					new HttpError(`animal type unavailable`, 422)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getFullData = (req, res, next) => {
	const fullList = service__animals
		.getFullData()
		.then((result) => {
			if (result === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	addBreed,
	getAllAnimals,
	getBreedsByAnimal,
	getFullData,
};
