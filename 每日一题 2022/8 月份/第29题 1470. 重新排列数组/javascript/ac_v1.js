/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const res = new Array(nums.length);

    for (let i = 0; i < n; i++) {
        res[i * 2] = nums[i];
        res[i * 2 + 1] = nums[i + n];
    }

    return res;
};
