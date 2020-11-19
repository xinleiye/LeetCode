/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = 0;
    const totalLen = nums.length;

    while (right < totalLen) {
        if (nums[right] !== 0) {
            if (left !== right) {
                nums[left] = nums[right];
                nums[right] = 0;
            }
            left++;
        }
        right++;
    }
};
