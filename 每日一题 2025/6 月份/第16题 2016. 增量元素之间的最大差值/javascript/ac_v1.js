/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let res = -1;
    let min = nums[0];
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        if (nums[i] > min) {
            res = Math.max(res, nums[i] - min);
        }
        min = Math.min(min, nums[i]);
    }

    return res;
};
