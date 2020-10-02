/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let res = 0;
    let jSet = new Set();

    for (let i = 0; i < J.length; i++) {
        jSet.add(J[i]);
    }
    for (let i = 0; i < S.length; i++) {
        if (jSet.has(S[i])) {
            res++;
        }
    }

    return res;
};
