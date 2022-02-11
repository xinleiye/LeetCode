/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let res = 1e5;

    nums.sort((val1, val2) => val1 - val2);
    for (let i = 0, len = nums.length - k; i <= len; i++) {
        res = Math.min(res, nums[i + k - 1] - nums[i]);
    }

    return res;
};
