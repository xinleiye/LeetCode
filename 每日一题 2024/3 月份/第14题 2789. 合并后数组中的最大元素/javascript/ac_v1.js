/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(nums) {
    let res = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] <= res) {
            res += nums[i];
        } else {
            res = nums[i];
        }
    }

    return res;
};
