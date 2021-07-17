/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    const length = nums.length;
    let sum = nums[0];

    for (let i = 1; i < length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        res = Math.max(res, sum);
    }

    return res;
};
