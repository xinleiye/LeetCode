/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res = 0;
    let maxLenArr = new Array(nums.length);

    maxLenArr[0] = 1;
    for (let i = 0, len = nums.length; i < len; i++) {
        let maxLen = 0;
        for (let j = 0; j <= i; j++) {
            if (nums[j] < nums[i]) {
                maxLen = Math.max(maxLen, maxLenArr[j]);
            }
        }
        maxLenArr[i] = maxLen + 1;
        res = Math.max(res, maxLenArr[i]);
    }

    return res;
};
