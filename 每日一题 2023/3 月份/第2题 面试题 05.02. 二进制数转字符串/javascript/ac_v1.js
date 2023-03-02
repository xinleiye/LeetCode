/**
 * @param {number} num
 * @return {string}
 */
var printBin = function(num) {
    let res = ["0", "."];

    while (num) {
        num *= 2;
        if (num >= 1) {
            res.push("1");
            num -= 1;
        } else {
            res.push("0");
        }
        if (res.length > 32) {
            break;
        }
    }

    return res.length > 32 ? "ERROR" : res.join("");
};
