/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let res = 0;
    let maxNegative = -Infinity;
    const numSet = new Set();

    for (const n of nums) {
        if (n < 0) {
            maxNegative = Math.max(maxNegative, n);
        } else if (!numSet.has(n)) {
            res += n;
            numSet.add(n);
        }
    }

    return numSet.size ? res : maxNegative;
};
