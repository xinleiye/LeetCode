/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    const length = s.length;

    for (let i = 1; i < length; i++) {
        if (s[i - 1] === "0" && s[i] === "1") {
            return false;
        }
    }

    return true;
};
