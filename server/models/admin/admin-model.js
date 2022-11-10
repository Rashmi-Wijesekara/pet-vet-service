const mongoose = require("mongoose");
var crypto = require("crypto"); 

const Schema = mongoose.Schema;

const schema__admin = new Schema({
	/*{
      "id": "000294392",
      "name": "Mohan Perera",
      "phoneNo": "0778435221",
      "email": "mohanp@pv.lk",
			"superAdmin": true,
			"dateRegistered": "2022-11-08",
      "password": "1234",
    }*/

	id: { type: String, required: true },
	name: { type: String, required: true },
	phoneNo: { type: String, required: true },
	email: { type: String, required: true },
	superAdmin: { type: Boolean, required: true},
	dateRegistered: { type: Date, required: true},
	hash: String,
	salt: String,
});

// Method to set salt and hash the password for a user 
schema__admin.methods.setPassword = function (password) {
	// Creating a unique salt for a particular user
	this.salt = crypto.randomBytes(16).toString("hex");

	// Hashing user's salt and password with 1000 iterations,

	this.hash = crypto
		.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
		.toString(`hex`);
}; 
  
// Method to check the entered password is correct or not 
schema__admin.methods.validPassword = function (password) {
	var hash = crypto
		.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
		.toString(`hex`);
	return this.hash === hash;
}; 

module.exports = mongoose.model(
	"Admin",
	schema__admin
);
