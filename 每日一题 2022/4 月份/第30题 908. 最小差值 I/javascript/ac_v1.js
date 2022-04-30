/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max = 0;
    let min = 1e4;

    for (const n of nums) {
        max = Math.max(max, n);
        min = Math.min(min, n);
    }

    if (max - min <= k * 2) {
        return 0;
    } else {
        return max - k - (min + k);
    }
};
