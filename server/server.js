const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const HttpError = require("./functions/HttpError")
const date = require("./functions/DateTime")

const server = express();

// routes
const router__admin = require("./routes/admin-routes")
const router__staff = require("./routes/staff-routes")

let port = process.env.PORT;
if (port == null || port == "") {
	port = 5000;
}

// able to parse the sent JSON inside the request body
server.use(bodyParser.json());

// handle CORS errors
server.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PATCH, DELETE"
	);
	next();
});

// connect routers
server.use("/api/admin", router__admin)
server.use("/api/staff", router__staff)

// check server configuration
server.use("/", (req, res) => {
	res.json({ message: "welcome to the server!" });
	console.log("connection found");
	// date.getCurrentTime()
});

// 404 not found ERROR
server.use((req, res, next) => {
	const error = new HttpError(
		"Could not find this route",
		404
	);
	throw error;
});

// ERRORS responding
server.use((error, req, res, next) => {
	if (res.headerSent) return next(error);

	res.status(error.code || 500);
	res.json({
		message: error.message || "An unknown error occurred",
	});
});

// if the database connection is successfull we can start the server
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		server.listen(port);
	})
	.catch((err) => {
		console.log(err);
	});
