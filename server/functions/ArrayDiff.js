const arr_diff = (a1, a2) => {
	var a = [],
		diff = [];

	for (var i = 0; i < a1.length; i++) {
		a[a1[i]] = true;
	}

	for (var i = 0; i < a2.length; i++) {
		if (a[a2[i]]) {
			delete a[a2[i]];
		} else {
			a[a2[i]] = true;
		}
	}

	for (var k in a) {
		diff.push(k);
	}

	// let intersection = a1.filter((x) => a2.includes(x));

	// for(var d in intersection){
	// 	diff.push(d)
	// }

	return diff;
}

module.exports = {
	arr_diff
}