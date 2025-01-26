/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res = 0;
    let maxPostion = 0;
    let currentPostion = 0;

    for (let i = 0, len = nums.length - 1; i < len; i++) {
        maxPostion = Math.max(maxPostion, i + nums[i]);
        if (i === currentPostion) {
            res++;
            currentPostion = maxPostion;
        }
    }

    return res;
};
