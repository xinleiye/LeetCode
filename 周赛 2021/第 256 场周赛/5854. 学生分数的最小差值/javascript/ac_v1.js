/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let res = 1e5;

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = k - 1, len = nums.length; i < len; i++) {
        res = Math.min(res, nums[i] - nums[i - k + 1]);
    }
    
    return res;
};
