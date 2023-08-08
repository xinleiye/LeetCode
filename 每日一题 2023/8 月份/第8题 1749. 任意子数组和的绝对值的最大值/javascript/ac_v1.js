/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let res = Math.abs(nums[0]);
    let max = nums[0];
    let min = nums[0];
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        const curMax = Math.max(nums[i], nums[i] + max);
        const curMin = Math.min(nums[i], nums[i] + min);

        res = Math.max(res, Math.abs(curMax), Math.abs(curMin));
        max = curMax;
        min = curMin;
    }

    return res;
};
