/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let res = 0;
    const chPos = {};
    const total = s.length;

    for (let i = 0; i < total; i++) {
        chPos[s[i]] = i;
    }
    for (let i = 0; i < total; i++) {
        res += Math.abs(i - chPos[t[i]]);
    }

    return res;
};
