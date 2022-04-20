/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const length = s.length;
    const res = new Array(length).fill(0);
    let index = -length;

    for (let i = 0; i < length; ++i) {
        if (s[i] === c) {
            index = i;
        }
        res[i] = i - index;
    }
    index = 2 * length;
    for (let i = length - 1; i >= 0; --i) {
        if (s[i] == c) {
            index = i;
        }
        res[i] = Math.min(res[i], index - i);
    }

    return res;
};
