/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxVal = 0;
    let res = 0;
    let count = 0;

    for (const n of nums) {
        if (n > maxVal) {
            maxVal = n;
            res = 1;
            count = 1;
        } else if (n === maxVal) {
            count++;
        } else {
            count = 0;
        }
        res = Math.max(res, count);
    }

    return res;
};
