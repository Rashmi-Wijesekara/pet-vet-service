const mongoose = require("mongoose");
var crypto = require("crypto");

const Schema = mongoose.Schema;

const schema__staff = new Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	phoneNo: { type: String, required: true },
	email: { type: String, required: true },
	position: { type: String, required: true },
	dateRegistered: { type: Date, required: true },
	hash: String,
	salt: String,
});

// Method to set salt and hash the password for a user 
schema__staff.methods.setPassword = function (password) {
	// Creating a unique salt for a particular user
	this.salt = crypto.randomBytes(16).toString("hex");

	// Hashing user's salt and password with 1000 iterations,

	this.hash = crypto
		.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
		.toString(`hex`);
}; 
  
// Method to check the entered password is correct or not 
schema__staff.methods.validPassword = function (password) {
	var hash = crypto
		.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
		.toString(`hex`);
	return this.hash === hash;
}; 

module.exports = mongoose.model(
	"Staff",
	schema__staff
);