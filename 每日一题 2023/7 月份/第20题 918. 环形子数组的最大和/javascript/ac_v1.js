/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    const total = nums.length;
    const leftSumMax = new Array(total);
    let res = nums[0];
    let leftSum = nums[0];
    let preSum = nums[0]
    leftSumMax[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        preSum = Math.max(preSum + nums[i], nums[i]);
        leftSum += nums[i];
        leftSumMax[i] = Math.max(leftSumMax[i - 1], leftSum);
        res = Math.max(preSum, res);
    }

    let rightSum = 0;
    for (let i = total - 1; i > 0; i--) {
        rightSum += nums[i];
        res = Math.max(res, rightSum + leftSumMax[i - 1]);
    }

    return res;
};
