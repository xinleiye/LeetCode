/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let res = 0;

    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] === "R") {
            count++;
        } else if (s[i] === "L") {
            count--;
        }
        if (count === 0) {
            res++;
        }
    }
    return res;
};
