/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 * @result
 * Runtime: 44 ms, faster than 98.67% of JavaScript online submissions for Longest Uncommon Subsequence I .
 * Memory Usage: 33.9 MB, less than 27.27% of JavaScript online submissions for Longest Uncommon Subsequence I .
 * @Tips
 * 难点在于理解题意
 */
var findLUSlength = function(a, b) {
    if (a === b) {
        return -1;
    } else {
        return Math.max(a.length, b.length);
    }
};
