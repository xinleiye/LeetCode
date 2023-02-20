/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    const total = nums.length;

    if (total === 3) {
        return 0;
    }
    nums.sort((n1, n2) => n1 - n2);

    return Math.min(nums[total - 1] - nums[2], nums[total - 3] - nums[0], nums[total - 2] - nums[1]);
};
