/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] !== nums[i + 1]) {
            res++;
        }
    }

    return nums[0] === 1 ? res : res + 1;
};
