const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema__animal = new Schema({
	type: { type: String, required: true },
	breeds: { type: Array, default: [] },
});

module.exports = mongoose.model("Animal", schema__animal)