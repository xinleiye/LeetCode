/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let res = 0;
    let pre = "";

    for (const ch of s) {
        if (ch === "*") {
            res += pre === "" ? 1 : 0;
        } else if (ch === "|") {
            pre = pre === "" ? "|" : "";
        }
    }

    return res;
};
