const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__parameters = require("../../services/admin/parameters-service")

const getTimeSlot = (req,res,next)=> {

}

const setTimeSlot = (req, res, next) => {};

const setOpenCloseTime = (req, res, next) => {};

const getOpenCloseTime = (req, res, next) => {};

const setSpecialOpenCloseTime = (req, res, next) => {};

module.exports = {
	getTimeSlot,
	setTimeSlot,
	setOpenCloseTime,
	getOpenCloseTime,
	setSpecialOpenCloseTime,
};