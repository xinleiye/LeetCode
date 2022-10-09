/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let res = 0;
    let layer = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        layer += (s[i] === "(" ? 1 : -1);
        if (s[i] === ")" && s[i - 1] === "(") {
            res += (1 << layer);
        }
    }

    return res;
};
