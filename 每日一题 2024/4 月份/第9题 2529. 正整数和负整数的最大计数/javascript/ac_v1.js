/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0;
    let neg = 0;

    for (const n of nums) {
        if (n > 0) {
            pos++;
        } else if (n < 0) {
            neg++;
        }
    }

    return Math.max(pos, neg);
};
