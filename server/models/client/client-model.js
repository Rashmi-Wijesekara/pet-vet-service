const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema__client = new Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	phoneNo: { type: String, required: true },
	address: { type: String, required: true },
	email: { type: String, required: false },
	dateRegistered: { type: Date, required: true },
	pets: { type: Array, default: []}
});

module.exports = mongoose.model("Client", schema__client);

