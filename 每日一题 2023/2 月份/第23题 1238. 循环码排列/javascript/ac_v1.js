/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
    const total = Math.pow(2, n);
    const res = new Array(total);

    for (let i = 0; i < total; i++) {
        res[i] = (i ^ (i >>> 1) ^ start);
    }

    return res;
};
