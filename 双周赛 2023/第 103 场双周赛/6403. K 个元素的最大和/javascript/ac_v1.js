/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let max = 0;

    for (const n of nums) {
        max = Math.max(max, n);
    }

    return max * k + (k - 1) * k / 2;
};
