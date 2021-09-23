/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 0 && n % 3 === 0) {
        n = (n - n % 3) / 3;
    }

    return n === 1;
};
