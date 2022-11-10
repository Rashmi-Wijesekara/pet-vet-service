const { validationResult } = require("express-validator");
const HttpError = require("../functions/HttpError")
const service__admin = require("../services/admin-service")

const getAllAdmins = (req,res) => {
	const allAdmins = service__admin.getAllAdmins().then((admins)=> {
		res.send({
			status: "OK",
			data: admins
		})
	}).catch((err)=> {
		console.log(err)
	})
}

const getAdminById = (req, res, next) => {
	const id = req.params.adminId;
	const data = service__admin
		.getAdminById(id)
		.then((admin) => {
			if (admin.length === 0)
				return next(
					new HttpError(
						`could not find admin ID ${id}`,
						404
					)
				);
			res.json({
				status: "OK",
				data: admin,
			});
		});
};

const addNewAdmin = (req, res, next) => {
	const { body } = req;
	const errors = validationResult(req);
	if (!errors.isEmpty())
		throw new HttpError(
			"Invalid inputs passed, please check your data",
			422
	);
	
	const admin = {
		name: body.name,
		phoneNo: body.phoneNo,
		email: body.email,
		password: body.password
	};

	const some = service__admin
		.addNewAdmin(admin)
		.then((addedAdmin) => {
			if (addedAdmin === "admin-id available") {
				return next(
					new HttpError(`admin ID already available`, 422)
				);
			} else if (addedAdmin === "email available") {
				return next(
					new HttpError(
						`Admin email already available`,
						422
					)
				);
			} else if (addedAdmin === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: addedAdmin });
		})
		.catch((err) => {
			console.log(err);
		});
};

const adminLogin = (req, res, next) => {
	const auth = {
		email: req.params.email,
		password: req.params.password
	}

	const some = service__admin
		.adminLogin(auth)
		.then((admin) => {
			if (admin === "invalid email") {
				return next(new HttpError(`Invalid email`, 422));
			} else if (admin === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			} else if (admin === "invalid password") {
				return next(new HttpError(`Invalid password`, 422));
			}

			return res
				.status(201)
				.send({ status: "OK", data: admin });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getAdminLog = (req, res) => {
	const logs = service__admin.getAdminLog().then((log)=> {
		res.send({
			status: "OK",
			data: log
		})
	}).catch((err)=> {
		console.log(err)
	})
};

module.exports = {
	getAllAdmins,
	getAdminById,
	addNewAdmin,
	adminLogin,
	getAdminLog,
};