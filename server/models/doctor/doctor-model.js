const mongoose = require("mongoose");
var crypto = require("crypto"); 

const Schema = mongoose.Schema;

const schema__doctor = new Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	phoneNo: { type: String, required: true },
	email: { type: String, required: true },
	address: { type: String, required: true },
	qualifications: { type: String, required: false },
	dateRegistered: { type: Date, required: true },
	hash: String,
	salt: String,
});

schema__doctor.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(16).toString("hex");

	this.hash = crypto
		.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
		.toString(`hex`);
}; 
   
schema__doctor.methods.validPassword = function (password) {
	var hash = crypto
		.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
		.toString(`hex`);
	return this.hash === hash;
}; 

module.exports = mongoose.model("Doctor", schema__doctor)
