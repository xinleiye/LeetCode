/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let min = 100;
    let numSet = new Set();

    for (const n of nums) {
        numSet.add(n);
        min = Math.min(min, n);
    }
    if (min < k) {
        return -1;
    }

    return min === k ? numSet.size - 1 : numSet.size;
};
