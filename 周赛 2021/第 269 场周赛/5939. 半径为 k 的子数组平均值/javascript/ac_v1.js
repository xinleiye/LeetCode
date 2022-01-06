/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const res = new Array(nums.length).fill(-1);
    const preSum = new Array(nums.length + 1).fill(0);
    const length = nums.length;
    const count = k * 2 + 1;

    for (let i = 0; i < length; i++) {
        preSum[i + 1] = nums[i] + preSum[i];
    }
    for (let i = k; i < length - k; i++) {
        res[i] = Math.floor((preSum[i + k + 1] - preSum[i - k]) / count);
    }

    return res;
};
