const Doctor = require("../../utils/doctor/Doctor")

const getAllDoctors = async () => {
	const allDoctors = await Doctor.getAllDoctors()
	return allDoctors
};

const addNewDoctor = async (newDoctor) => {
	const dateRegistered = new Date()

	const doctorToInsert = {
		...newDoctor,
    dateRegistered
	}

	const added = await Doctor.addNewDoctor(doctorToInsert)
	return added
};

const getDoctorById = async (id) => {
	const doctor = await Doctor.getDoctorById(id)
  return doctor
};

module.exports = {
	getAllDoctors,
	addNewDoctor,
	getDoctorById,
};