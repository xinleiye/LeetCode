/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let res = 0;
    let preSum = new Array(nums.length).fill(nums[0])
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        preSum[i] = preSum[i - 1] + nums[i];
    }
    for (let i = 0; i < total - 1; i++) {
        if (preSum[i] >= preSum[total - 1] - preSum[i]) {
            res++;
        }
    }
    
    return res;
};
