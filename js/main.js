

// Ask the user for the number of hours
let getHours = parseInt(prompt('Enter the number of hours', 5));

// Convert hours into seconds
let getSeconds = (getHours) => getHours * 3600;

// User message
alert(`The number of seconds in ${getHours} hours = ${getSeconds(getHours)}`);

// 
