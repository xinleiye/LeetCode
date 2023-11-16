/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let res = 0;
    let dp = 0;
    const total = nums.length;

    for (let i = total - 1; i >= 0; i--) {
        if (nums[i] > threshold) {
            dp = 0;
        } else if (i === total - 1 || nums[i] % 2 !== nums[i + 1] % 2) {
            dp++;
        } else {
            dp = 1;
        }
        if (nums[i] % 2 === 0) {
            res = Math.max(res, dp);
        }
    }

    return res;
};
