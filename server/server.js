const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const server = express();

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

// check server configuration
server.use("/", (req, res) => {
	res.json({ message: "welcome to the server!" });
	console.log("connection found")
});

server.listen(port)