/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const res = new Array(n).fill(0);
    const mid = n >>> 1;

    for (let i = 0; i < mid; i++) {
        res[i] = -n + i;
        res[n - i - 1] = n - i;
    }

    return res;
};
