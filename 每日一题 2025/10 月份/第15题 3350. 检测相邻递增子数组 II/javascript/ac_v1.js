/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    let preLen = 0;
    let len = 1;
    const total = nums.length;
    let res = 1;

    for (let i = 1; i < total; i++) {
        if (nums[i] > nums[i - 1]) {
            len++;
        } else {
            preLen = len;
            len = 1;
        }
        res = Math.max(res, len >>> 1);
        res = Math.max(res, Math.min(preLen, len));
    }

    return res;
};
