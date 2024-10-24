/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
    nums.sort((n1, n2) => n1 - n2);

    const total = nums.length;
    const min = nums[0];
    const max = nums[total - 1];
    let res = max - min;
    for (let i = 1; i < total; i++) {
        res = Math.min(res, Math.max(max - k, nums[i - 1] + k) - Math.min(min + k, nums[i] - k));
    }

    return res;
};
