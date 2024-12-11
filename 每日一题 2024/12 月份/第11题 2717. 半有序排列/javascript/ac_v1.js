/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    const total = nums.length;
    const i1 = nums.indexOf(1);
    const i2 = nums.indexOf(total);

    return i1 + (total - i2 - 1) - (i1 > i2 ? 1 : 0);   
};
