const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__patient = require("../../services/patient/patient-service")

const getAllPatients = (req,res,next)=> {}

const addNewPatient = (req,res,next)=> {}

const getPatientById = (req,res,next)=> {}

module.exports = {
	getAllPatients,
	addNewPatient,
	getPatientById,
};