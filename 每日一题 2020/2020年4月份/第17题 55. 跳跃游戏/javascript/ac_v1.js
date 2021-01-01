/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxPos = 0;
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        if (maxPos < i) {
            return false;
        }
        if (maxPos >= length - 1) {
            return true;
        }
        maxPos = Math.max(maxPos, i + nums[i]);
    }
};
