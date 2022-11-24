const mongoose = require("mongoose");
const model__openCloseTime = require("../../models/admin/open-close-time-model")
const model__admin = require("../../models/admin/admin-model")

const database = require("../../database/database.json")


// get the default time slot amount
const getTimeSlot = async ()=> {
	return await database.timeSlot
}

// get the default open, close time
const getOpenCloseTime = async()=> {
	return await database.defaultDayTime
}

// set the clinic open,close time to the given date
const setSpecialOpenCloseTime = async(add)=> {
	const admin = await model__admin.findOne({id: add.adminId})

	let daytime = new model__openCloseTime({
		date: add.date,
		openAt: add.openAt,
		closeAt: add.closeAt,
		dateCreated: add.dateCreated,
		admin: admin
	})

	try{
		await daytime.save()
	}catch(e){
		console.log(e);
		return "db error";
	}

	return daytime
}

// get the open,close time by the given date
const getOpenCloseTimeByDate = async (date)=> {
	const defaultTime = await getOpenCloseTime()
	
}

module.exports = {
	getTimeSlot,
	getOpenCloseTime,
	getOpenCloseTimeByDate,
	setSpecialOpenCloseTime
}