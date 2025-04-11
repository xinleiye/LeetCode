/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const set = new Set();

    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) {
            return Math.floor(i / 3) + 1;
        }
        set.add(nums[i]);
    }

    return 0;
};
