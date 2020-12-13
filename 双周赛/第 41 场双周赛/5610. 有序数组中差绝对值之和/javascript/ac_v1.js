/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const length = nums.length;
    let res = new Array(length);
    let sumNums = new Array(length);

    sumNums[0] = nums[0];
    for (let i = 1; i < length; i++) {
        sumNums[i] = sumNums[i -1] + nums[i];
    }

    res[length - 1] = nums[length - 1] * (length - 1) - sumNums[length - 2];
    for (let i = length - 2; i > 0; i--) {
        res[i] = nums[i] * i - sumNums[i - 1] + sumNums[length - 1] - sumNums[i - 1] - nums[i] * (length - i)
    }
    res[0] = sumNums[length - 1] - nums[0] * length;

    return res;
};
