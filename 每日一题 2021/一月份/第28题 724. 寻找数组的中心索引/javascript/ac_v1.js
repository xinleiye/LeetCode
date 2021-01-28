/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const length = nums.length;
    const numSum = new Array(nums.length + 2);

    numSum[0] = 0;
    for (let i = 1; i <= length; i++) {
        numSum[i] = numSum[i - 1] + nums[i - 1];
    }
    numSum[length + 1] = numSum[length];

    for (let i = 1, len = length + 1; i < len; i++) {
        if (numSum[i - 1] === numSum[len] - numSum[i]) {
            return i - 1;
        }
    }

    return -1;
};
