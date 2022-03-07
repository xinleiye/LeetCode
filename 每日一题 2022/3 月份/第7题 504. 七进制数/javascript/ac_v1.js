/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    const res = [];
    let flag = "";

    if (num < 0) {
        num = -num;
        flag = "-";
    }

    do {
        res.unshift(num % 7);
        num = Math.floor(num / 7);
    } while (num)

    return flag + res.join("");
};
