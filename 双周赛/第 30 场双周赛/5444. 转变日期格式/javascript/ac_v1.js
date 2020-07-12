/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let monthMap = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    };
    let dateArr = date.split(" ");
    let day;
    
    day = parseInt(dateArr[0]);
    if (day < 10) {
        day = "0" + day;
    }
    
    return `${dateArr[2]}-${monthMap[dateArr[1]]}-${day}`;
};
