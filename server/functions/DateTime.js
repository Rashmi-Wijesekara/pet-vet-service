const timeNow = new Date();

// ************************************
// get time and date seperately from Date() object
const time = timeNow.toLocaleTimeString();
const date = timeNow.toLocaleDateString();
console.log(time);
console.log(date);
