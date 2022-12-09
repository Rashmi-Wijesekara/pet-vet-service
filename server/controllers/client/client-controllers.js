const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__client = require("../../services/client/client-service")

const getAllClients = (req, res, next) => {}

const addNewClient = (req, res, next) => {}

const getClientById = (req, res, next) =>  {}

const addNewPatientByClientId = (req, res, next) => {}

const getPatientByClientId = (req, res, next) => {}

module.exports = {
	getAllClients,
  addNewClient,
  getClientById,
	addNewPatientByClientId,
  getPatientByClientId,
}