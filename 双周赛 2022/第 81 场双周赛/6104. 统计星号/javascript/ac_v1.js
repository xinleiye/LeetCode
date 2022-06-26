/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let res = 0;
    const strArr = s.split("|");

    for (let i = 0, len = strArr.length; i < len; i += 2) {
        for (const ch of strArr[i]) {
            if (ch === "*") {
                res++;
            }
        }
    }

    return res;
};
