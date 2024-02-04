/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let res = 0;
    const monthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const isLeapYear = year => year % 100 ? year % 4 === 0 : year % 400 === 0;
    const [year, month, day] = date.split("-").map(num => parseInt(num, 10));

    for (let i = 0; i < month; i++) {
        res += monthDay[i];
    }

    return res + day + (month > 2 ? (isLeapYear(year) ? 1 : 0) : 0);
};
