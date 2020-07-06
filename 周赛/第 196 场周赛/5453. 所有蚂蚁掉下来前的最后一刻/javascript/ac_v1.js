/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let res = 0;

    left.forEach(val => {
        res = Math.max(res, val);
    });

    right.forEach(val => {
        res = Math.max(res, n - val);
    });

    return res;
};
