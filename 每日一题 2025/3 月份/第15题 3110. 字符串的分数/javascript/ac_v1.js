/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let res = 0;
    const total = s.length;

    for (let i = 1; i < total; i++) {
        res += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }

    return res;
};
