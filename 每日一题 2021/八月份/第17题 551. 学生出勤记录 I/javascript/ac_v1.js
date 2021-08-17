/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0;
    let late = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            absent++;
            late = 0;
            if (absent >= 2) {
                return false;
            }
        } else if (s[i] === "L") {
            late++;
            if (late >= 3) {
                return false;
            }
        } else {
            late = 0;
        }
    }

    return true;
};
