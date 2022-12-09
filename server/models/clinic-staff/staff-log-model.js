const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema__staffLog = new Schema({
	staff: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "Staff",
	},
	loginAt: { type: Date, required: true },
});

module.exports = mongoose.model(
	"StaffLog",
	schema__staffLog
);
