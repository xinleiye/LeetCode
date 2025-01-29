/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const numMap = new Map();
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        if (numMap.has(nums[i])) {
            if (i - numMap.get(nums[i]) <= k) {
                return true;
            } else {
                numMap.set(nums[i], i);
            }
        } else {
            numMap.set(nums[i], i);
        }
    }

    return false;
};
