
/* Given a date string, dateString, in the format MM/DD/YYYY,
 find and return the day name for that date. 
 Each day name must be one of the following strings: 
 Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.*/

function getDayName(dateString) {
    // Write your code here
    let date = new Date(dateString);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return weekDays[date.getDay()];
}

let X = 4
let Y = 5
let Z = 8

// if (Y < Z && Y > X) {
//     console.log(`Y is less than Z but greater than X, or mathematically
// 	'X < Y < Z' or 'Z > Y > X'
// 	`);
// }

console.log((Y < Z && Y > X))

