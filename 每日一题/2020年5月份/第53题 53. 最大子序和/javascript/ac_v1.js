/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;

    nums.forEach((num) => {
        sum = Math.max(sum + num, num);
        res = Math.max(res, sum);
    });

    return res;
};
