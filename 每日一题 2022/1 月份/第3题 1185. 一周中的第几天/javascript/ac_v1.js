/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    let days = 0;
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    const isLeapYear = year => {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    };

    for (let i = 1970; i < year; i++) {
        days += isLeapYear(i) ? 366 : 365;
    }
    for (let i = 0; i < month; i++) {
        days += months[i];
    }
    days += isLeapYear(year) && month > 2 ? 1 : 0;

    return week[(days + day + 3) % 7];
};
