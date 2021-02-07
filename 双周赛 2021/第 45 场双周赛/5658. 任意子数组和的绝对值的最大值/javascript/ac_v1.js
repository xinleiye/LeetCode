/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let res;
    const length = nums.length;
    let preMax = nums[0];
    let preMin = nums[0];

    res = Math.abs(nums[0]);
    for (let i = 1; i < length; i++) {
        const currentMax = Math.max(nums[i], nums[i] + preMax);
        const currentMin = Math.min(nums[i], nums[i] + preMin);

        res = Math.max(res, Math.abs(currentMax), Math.abs(currentMin));
        preMax = currentMax;
        preMin = currentMin;
    }

    return res;
};
