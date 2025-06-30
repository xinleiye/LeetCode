/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    return [...nums.keys()].sort((i1, i2) => nums[i2] - nums[i1]).slice(0, k).sort((i1, i2) => i1 - i2).map(i => nums[i]);
};
