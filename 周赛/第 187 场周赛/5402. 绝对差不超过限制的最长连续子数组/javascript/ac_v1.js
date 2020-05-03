/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let res = 1;
    let start = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= start; j--) {
            if ((Math.abs(nums[i] - nums[j])) > limit) {
                start = j + 1;
                break;
            }
        }

        res = Math.max(i - start + 1, res);
    }

    return res;
};
