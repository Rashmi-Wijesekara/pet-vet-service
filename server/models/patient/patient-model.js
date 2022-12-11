const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema__patient = new Schema({
	id: { type: String, required: true },
	name: { type: String, required: false },
	gender: { type: String, required: false },
	type: { type: String, required: true },
	breed: { type: String, required: false },
	dob: { type: Date, required: false },
	dateRegistered: { type: Date, required: true },
	client: { type: String, required: true }
});

module.exports = mongoose.model("Patient", schema__patient);
