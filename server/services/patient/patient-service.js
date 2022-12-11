const ID = require("nodejs-unique-numeric-id-generator");
const Patient = require("../../utils/patient/Patient")

const getAllPatients = async()=> {
	const allPatients = await Patient.getAllPatients()
	return allPatients
}

const addNewPatient = async(newPatient)=> {
	const dateRegistered = new Date()

	const patientToInsert = {
		...newPatient,
		id: ID.generate(new Date().toJSON()),
		dateRegistered: dateRegistered,
	};

	const added = await Patient.addNewPatient(patientToInsert)
	return added
}

const getPatientById = async(id)=> {
	const patient = await Patient.getPatientById(id)
  return patient
}

module.exports = {
	getAllPatients,
	addNewPatient,
	getPatientById,
};
