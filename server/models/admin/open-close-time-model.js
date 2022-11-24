const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema__openCloseTime = new Schema({
	date: { type: String, required: true },
	openAt: { type: String, required: true },
	closeAt: { type: String, required: true },
	dateCreated: { type: Date, required: true },
	reason: {type: String},
	admin: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "Admin",
	},
});

module.exports = mongoose.model(
	"OpenCloseTime",
	schema__openCloseTime
);
