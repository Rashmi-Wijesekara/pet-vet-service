const Parameters = require("../../utils/admin/Parameters")

const getTimeSlot = async ()=> {
	const timeSlot = await Parameters.getTimeSlot()
	return timeSlot
}

const getOpenCloseTime = async()=> {
	const time = await Parameters.getOpenCloseTime()
	return time
}

const getOpenCloseTimeByDate = async(date)=> {
	const added = await Parameters.getOpenCloseTimeByDate(date)
	return added
}

const setSpecialOpenCloseTime = async(daytime) => {
	const created = new Date()

	const add = {
		...daytime,
		dateCreated: created
	}
	const added = await Parameters.setSpecialOpenCloseTime(add)
	return added
}

module.exports = {
	getTimeSlot,
	getOpenCloseTime,
	getOpenCloseTimeByDate,
	setSpecialOpenCloseTime
}