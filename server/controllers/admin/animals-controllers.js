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

const getAllAnimals = (req, res, next) => {};

const getBreedsByAnimal = (req, res, next) => {};

const getFullData = (req, res, next) => {};

module.exports = {
	addBreed,
	getAllAnimals,
	getBreedsByAnimal,
	getFullData,
};
