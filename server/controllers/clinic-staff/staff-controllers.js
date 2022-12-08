const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__staff = require("../../services/clinic-staff/staff-service");

const getAllStaff = (req, res, next) => {
	const allStaff = service__staff
		.getAllStaff()
		.then((staff) => {
			res.send({
				status: "OK",
				data: staff,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

const getStaffLog = (req, res, next) => {
	const logs = service__staff
		.getStaffLog()
		.then((log) => {
			res.send({
				status: "OK",
				data: log,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

const staffLogin = (req, res, next) => {
	const auth = {
		email: req.params.email,
		password: req.params.password,
	};

	const results = service__staff
		.staffLogin(auth)
		.then((staff) => {
			if (staff === "invalid email or position") {
				return next(
					new HttpError(`Invalid email or position`, 422)
				);
			} else if (staff === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			} else if (staff === "invalid password") {
				return next(new HttpError(`Invalid password`, 422));
			}

			return res
				.status(201)
				.send({ status: "OK", data: staff });
		})
		.catch((err) => {
			console.log(err);
		});
};

const addNewStaffMember = (req, res, next) => {
	const { body } = req;
	const errors = validationResult(req);
	if (!errors.isEmpty())
		throw new HttpError(
			"Invalid inputs passed, please check your data",
			422
		);

	const member = {
		name: body.name,
		email: body.email,
		phoneNo: body.phoneNo,
		position: body.position,
		password: body.password,
	};

	const results = service__staff
		.addNewStaffMember(member)
		.then((addedMember) => {
			if (addedMember === "staff member id available") {
				return next(
					new HttpError(
						`staff member ID already available`,
						422
					)
				);
			} else if (addedMember === "email available") {
				return next(
					new HttpError(
						`Staff member email already available`,
						422
					)
				);
			} else if (addedMember === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: addedMember });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getStaffById = (req, res, next) => {
	const id = req.params.staffId;
	const results = service__staff
		.getStaffById(id)
		.then((member) => {
			if (member.length === 0) {
				return next(
					new HttpError(
						`could not find staff member ID ${id}`,
						404
					)
				);
			}

			res.json({
				status: "OK",
				data: member,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	getAllStaff,
	getStaffLog,
	staffLogin,
	addNewStaffMember,
	getStaffById,
};
