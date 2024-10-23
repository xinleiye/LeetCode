/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max = 0;
    let min = 1e4;

    for (const n of nums) {
        max = Math.max(max, n);
        min = Math.min(min, n);
    }

    return Math.max(0, max - min - 2 * k);    
};
