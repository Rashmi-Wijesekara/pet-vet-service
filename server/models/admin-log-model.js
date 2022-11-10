const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema__adminLog = new Schema({
	admin: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "Admin",
	},
	loginAt: { type: Date, required: true}
});

module.exports = mongoose.model(
	"AdminLog",
	schema__adminLog
)
