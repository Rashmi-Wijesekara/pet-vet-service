const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__animals = require("../../services/admin/animals-service")

const addBreed = (req, res, next) =>{}

const getAllAnimals = (req, res, next) =>{}

const getBreedsByAnimal = (req, res, next) =>{}

const getFullData = (req, res, next) =>{}

module.exports = {
	addBreed,
	getAllAnimals,
	getBreedsByAnimal,
	getFullData
}