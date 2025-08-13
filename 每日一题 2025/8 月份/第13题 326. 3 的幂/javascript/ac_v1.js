/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // const MAX = Math.pow(3, 19);

    return n > 0 && (1162261467 % n) === 0
};
