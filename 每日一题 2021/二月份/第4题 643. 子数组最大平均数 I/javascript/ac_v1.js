/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let res = (-1e4) * k;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    res = Math.max(res, sum / k);
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        res = Math.max(res, sum / k);
    }

    return res;
};
