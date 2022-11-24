const { validationResult } = require("express-validator");
const HttpError = require("../../functions/HttpError");
const service__parameters = require("../../services/admin/parameters-service");

const getTimeSlot = (req, res, next) => {
	const timeSlot = service__parameters
		.getTimeSlot()
		.then((slot) => {
			res.send({
				status: "OK",
				data: slot,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

// const setTimeSlot = (req, res, next) => {
// 	const {body} = req
// 	const errors = validationResult(req)
// 	if (!errors.isEmpty())
// 		throw new HttpError(
// 			"Invalid inputs passed, please check your data",
// 			422
// 		);

// 	const timeSlot = body.timeSlot

// 	const added = service__parameters.setTimeSlot(timeSlot)
// 		.then((addedTime)=> {
// if(addedTime === "db error"){
// 	return next(
// 		new HttpError(`DB connection error`, 500)
// 	);
// }
// return res
// 	.status(201)
// 	.send({ status: "OK", data: addedTime });
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
// };

// const setOpenCloseTime = (req, res, next) => {};

const getOpenCloseTime = (req, res, next) => {
	const openCloseTime = service__parameters
		.getOpenCloseTime()
		.then((time) => {
			res.send({
				status: "OK",
				data: time,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

const getOpenCloseTimeByDate = (req, res, next) => {
	const date = req.params.date;
	const add = service__parameters
		.getOpenCloseTimeByDate(date)
		.then((added) => {
			if (added === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}
			return res
				.status(201)
				.send({ status: "OK", data: added });
		})
		.catch((e) => {
			console.log(e);
		});
};

const setSpecialOpenCloseTime = (req, res, next) => {
	const { body } = req;
	const errors = validationResult(req);
	if (!errors.isEmpty())
		throw new HttpError(
			"Invalid inputs passed, please check your data",
			422
		);

	const daytime = {
		date: body.date,
		openAt: body.openAt,
		closeAt: body.closeAt,
		reason: body.reason,
		adminId: body.adminId
	};

	const check = service__parameters
		.setSpecialOpenCloseTime(daytime)
		.then((result) => {
			if (result === "db error") {
				return next(
					new HttpError(`DB connection error`, 500)
				);
			}

			return res
				.status(201)
				.send({ status: "OK", data: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	getTimeSlot,
	getOpenCloseTime,
	setSpecialOpenCloseTime,
	getOpenCloseTimeByDate,
};
