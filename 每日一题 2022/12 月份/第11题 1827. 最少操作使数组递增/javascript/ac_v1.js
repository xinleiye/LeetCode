/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0;
    let pre = nums[0];
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        if (nums[i] <= pre) {
            pre++;
            res += pre - nums[i];
        } else {
            pre = nums[i];
        }
    }

    return res;
};
