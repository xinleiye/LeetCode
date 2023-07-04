/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let min = 100;
    let max = 0;

    for (const n of nums) {
        min = Math.min(min, n);
        max = Math.max(max, n);
    }
    for (const n of nums) {
        if (n !== min && n !== max) {
            return n;
        }
    }

    return -1;
};
