/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let res = 0;
    const total = nums.length;
    let left = 0;
    let count0 = 0;

    for (let right = 0; right < total; right++) {
        if (nums[right] === 0) {
            count0++;
        }
        while (count0 > 1) {
            if (nums[left] === 0) {
                count0--;
            }
            left++;
        }
        res = Math.max(res, right - left);
    }

    return res;
};
