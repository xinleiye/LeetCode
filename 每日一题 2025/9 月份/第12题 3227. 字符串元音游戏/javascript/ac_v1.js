/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    for (const ch of s) {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            return true;
        }
    }

    return false;
};
