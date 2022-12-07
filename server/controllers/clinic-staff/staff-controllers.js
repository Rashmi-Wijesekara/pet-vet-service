const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__staff = require("../../services/clinic-staff/staff-service")

const getAllStaff = (req, res, next)=> {}

const getStaffLog = (req, res, next)=> {}

const staffLogin = (req, res, next)=> {}

const addNewStaffMember = (req, res, next)=> {}

const getStaffById = (req, res, next)=> {}

module.exports = {
	getAllStaff,
	getStaffLog,
	staffLogin,
	addNewStaffMember,
	getStaffById,
};