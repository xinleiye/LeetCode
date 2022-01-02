/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let maxAindex = -1;
    let minBindex = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            maxAindex = i;
        } else if (minBindex === -1) {
            minBindex = i;
        }
    }

    if (minBindex === -1 || minBindex === -1) {
        return true;
    } else {
        return maxAindex < minBindex;
    }
};
