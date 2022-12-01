/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    return n === 1 ? 0 : n % 2 ? n : n / 2;
};
