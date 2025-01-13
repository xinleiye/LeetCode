/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let totalSum = 0;
    for (const n of nums) {
        totalSum += n;
    }

    let preSum = 0;
    const total = nums.length;
    let res = 0;
    for (let i = 0; i < total - 1; i++) {
        preSum += nums[i];
        if (preSum >= totalSum - preSum) {
            res++;
        }
    }

    return res;
};
