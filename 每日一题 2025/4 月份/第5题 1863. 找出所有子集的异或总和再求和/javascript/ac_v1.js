/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let or = 0;

    for (const n of nums) {
        or |= n;
    }

    return or << (nums.length - 1);
};
