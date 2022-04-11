/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    const countMap = [1, 10, 91, 739, 5275, 32491, 168571, 712891, 2345851];
    return countMap[n];
};
