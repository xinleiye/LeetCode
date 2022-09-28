/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let res = 1;
    let maxAnd = nums[0];
    let buff = [];

    for (const n of nums) {
        if (n > maxAnd) {
            buff = [];
            buff.push(n);
            maxAnd = n;
            res = 1;
        } else if (n === maxAnd) {
            buff.push(n);
            res = Math.max(res, buff.length);
        } else {
            buff = [];
        }
    }

    return res;
};
