/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    const total = nums.length;
    let res = Math.abs(nums[0] - nums[total - 1]);

    for (let i = 1; i < total; i++) {
        res = Math.max(res, Math.abs(nums[i] - nums[i - 1]));
    }

    return res;
};
