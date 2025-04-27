/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let res = 0;
    const total = nums.length;
    let minKIndex = -1;
    let maxKIndex = -1;
    let invalidIndex = -1;

    for (let i = 0; i < total; i++) {
        if (nums[i] === minK) {
            minKIndex = i;
        }
        if (nums[i] === maxK) {
            maxKIndex = i;
        }
        if (nums[i] < minK || nums[i] > maxK) {
            invalidIndex = i;
        }
        res += Math.max(0, Math.min(minKIndex, maxKIndex) - invalidIndex);
    }

    return res;
};
