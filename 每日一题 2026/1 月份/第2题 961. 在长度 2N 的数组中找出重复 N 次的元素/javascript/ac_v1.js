/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        if (nums[i] === nums[(i + 1) % total] || nums[i] === nums[(i + 2) % total]) {
            return nums[i];
        }
    }

    return -1;
};
