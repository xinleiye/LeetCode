/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let pre = -1;
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        if (nums[i] === 1) {
            if (pre >= 0) {
                if (i - pre - 1 < k) {
                    return false;
                }
            }
            pre = i;
        }
    }

    return true;
};
