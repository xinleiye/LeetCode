/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    const total = nums.length;
    const res = new Array(total);

    for (const n of nums) {
        rightSum += n;
    }
    for (let i = 0; i < total; i++) {
        rightSum -= nums[i];
        res[i] = Math.abs(rightSum - leftSum);
        leftSum += nums[i];
    }

    return res;
};
