const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__doctor = require("../../services/doctor/doctor-service")

const getAllDoctors = (req,res,next)=> {}

const addNewDoctor = (req, res, next) => {};

const getDoctorById = (req, res, next) => {};

module.exports = {
	getAllDoctors,
	addNewDoctor,
	getDoctorById
}