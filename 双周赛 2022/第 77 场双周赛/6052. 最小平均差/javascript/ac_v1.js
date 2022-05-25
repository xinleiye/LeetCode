/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let index = 0;
    let min = 1e5;
    let preSum = new Array(nums.length);
    const total = nums.length;

    preSum[0] = nums[0];
    for (let i = 1; i < total; i++) {
        preSum[i] = preSum[i - 1] + nums[i];
    }
    for (let i = 0; i < total - 1; i++) {
        let cur = Math.abs(Math.floor(preSum[i] / (i + 1)) - Math.floor((preSum[total - 1] - preSum[i]) / (total - i - 1)));
        if (cur < min) {
            min = cur;
            index = i;
        }
    }
    if (Math.floor(preSum[total - 1] / total) < min) {
        index = total - 1;
    }

    return index;
};
