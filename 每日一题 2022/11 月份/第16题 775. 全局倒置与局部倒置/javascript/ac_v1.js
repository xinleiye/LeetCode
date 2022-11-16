/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    let min = nums[nums.length - 1];

    for (let i = nums.length - 3; i >= 0; i--) {
        if (nums[i] >= min) {
            return false;
        }
        min = Math.min(min, nums[i + 1]);
    }

    return true;
};
