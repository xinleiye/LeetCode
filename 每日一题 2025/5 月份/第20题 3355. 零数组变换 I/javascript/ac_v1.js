/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const total = nums.length;
    const diff = new Array(total + 1).fill(0);

    for (const [l, r] of queries) {
        diff[l]++;
        diff[r + 1]--;
    }
    for (let i = 1; i <= total; i++) {
        diff[i] += diff[i - 1];
    }
    for (let i = 0; i < total; i++) {
        if (nums[i] > diff[i]) {
            return false;
        }
    }

    return true;
};
