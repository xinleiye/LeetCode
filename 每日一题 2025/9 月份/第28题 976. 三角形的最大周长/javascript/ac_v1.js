/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((n1, n2) => n1 - n2);
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < nums[i - 1] + nums[i - 2]) {
            return nums[i] + nums[i - 1] + nums[i - 2];
        }
    }

    return 0;
};
