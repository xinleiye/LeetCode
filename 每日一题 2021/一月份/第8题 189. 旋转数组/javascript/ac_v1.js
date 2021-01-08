/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const length = nums.length;
    let steps = k % length;

    for (let i = 0; i < steps; i++) {
        let tmp = nums[length - 1];

        for (let j = length - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }

        nums[0] = tmp;
    }
};
