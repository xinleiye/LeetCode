/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    let res = -1;
    const total = nums.length;
    let diff = 1;
    let len = 1;

    for (let i = 1; i < total; i++) {
        if (nums[i] - nums[i - 1] === diff) {
            len++;
            diff *= -1;
            res = Math.max(res, len);
        } else {
            if (nums[i] - nums[i - 1] === 1) {
                len = 2;
                diff = -1;
            } else {
                len = 1;
                diff = 1;
            }
        }
    }

    return res;
};
