/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const sumSet = new Set();
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        const sum = nums[i] + nums[i - 1];

        if (sumSet.has(sum)) {
            return true;
        } else {
            sumSet.add(sum);
        }
    }

    return false;
};
