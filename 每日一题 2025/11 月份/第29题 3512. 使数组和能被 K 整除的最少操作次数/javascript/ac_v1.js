/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = 0;

    for (const n of nums) {
        sum += n;
    }

    return sum % k;
};
