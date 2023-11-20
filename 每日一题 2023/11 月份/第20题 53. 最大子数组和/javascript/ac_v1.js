/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;

    for (const n of nums) {
        sum = Math.max(n, sum + n);
        res = Math.max(res, sum);
    }

    return res;
};
