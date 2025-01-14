/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((n1, n2) => n1 - n2);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= k) {
            return i;
        }
    }

    return nums.length;
};
