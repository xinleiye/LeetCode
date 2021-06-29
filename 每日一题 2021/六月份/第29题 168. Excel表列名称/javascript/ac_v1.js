/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const res = [];
    const charArr = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    while (columnNumber) {
        const current = (columnNumber - 1) % 26 + 1;

        res.unshift(charArr[current]);
        columnNumber = (columnNumber - current) / 26;
    }

    return res.join("");
};
