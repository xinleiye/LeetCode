/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    if (k === 1) {
        return nums.slice();
    }

    const total = nums.length;
    const res = new Array(total - k + 1).fill(-1);
    let count = 1;
    for (let i = 1; i < total; i++) {
        count = nums[i] - nums[i - 1] === 1 ? count + 1 : 1;
        if (count >= k) {
            res[i - k + 1] = nums[i];
        }
    }

    return res;
};
