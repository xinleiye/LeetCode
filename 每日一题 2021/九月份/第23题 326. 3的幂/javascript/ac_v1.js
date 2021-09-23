/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    const MAX = Math.pow(3, 19);

    return n > 0 && MAX % n === 0;
};
