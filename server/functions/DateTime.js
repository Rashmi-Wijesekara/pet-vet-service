const getCurrentTime = () => {
	const timeNow = new Date();

	// get time and date seperately from Date() object
	const time = timeNow.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	console.log(time);
	return time;
};

const getTodayDate = () => {
	const timeNow = new Date();
	const date = timeNow.toLocaleDateString();
	console.log(date);
	return date;
};

const compare2dates = () => {
	var now = new Date();
	console.log(
		now.toLocaleDateString() +
			" " +
			now.toLocaleTimeString()
	);
	var in20 = new Date(now.getTime() + 1000 * 60 * 20);
	console.log(
		in20.toLocaleDateString() +
			" " +
			in20.toLocaleTimeString()
	);

	// at any instant suppose now is cuurent time then you can compare like

	if (now.getTime() > in20.getTime()) {
		console.log("current is greater");
	} else {
		console.log("in20 is greater");
	}
};

const formatDate = (date)=> {
	const dateObj = new Date(date);
	const dateformat = dateObj.toLocaleDateString();
	const timeformat = dateObj.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	return (dateformat + " " + timeformat)
}

module.exports = {
	getCurrentTime,
	getTodayDate,
	compare2dates,
	formatDate
};
