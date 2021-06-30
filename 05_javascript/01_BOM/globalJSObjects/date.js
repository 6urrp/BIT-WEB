/*Date
● Print out the whole date object in the console.
● Print out the current time in the console.
● Print out the current date in the console. */

var wholeDate = new Date();
console.log(wholeDate);

var currentTime = Date.now();
console.log(currentTime);

var currentDate = wholeDate.getDate() + "." + (wholeDate.getMonth() +1) + ".";
console.log(currentDate);