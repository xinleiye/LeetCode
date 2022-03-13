/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
    const total = nums.length;

    if (total === 1) {
        return k % 2 ? -1 : nums[0];
    }
    
    let res = -1;
    if (k < total) {
        for (let i = 0; i < k - 1; i++) {
            res = Math.max(res, nums[i]);
        }
        return Math.max(res, nums[k]);
    }
    if (k === total) {
        for (let i = 0; i < k - 1; i++) {
            res = Math.max(res, nums[i]);
        }
        return res;
    }
    for (let i = 0; i < total; i++) {
        res = Math.max(res, nums[i]);
    }
    return res;
};
