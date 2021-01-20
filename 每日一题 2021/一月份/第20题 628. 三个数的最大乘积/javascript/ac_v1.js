/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const length = nums.length;

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    return Math.max(nums[0] * nums[1] * nums[length - 1], nums[length - 3] * nums[length - 2] * nums[length - 1]);
};
