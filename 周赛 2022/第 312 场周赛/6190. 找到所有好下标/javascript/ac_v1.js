/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function(nums, k) {
    const res = [];
    const total = nums.length;
    const left = new Array(total).fill(1);
    const right = new Array(total).fill(1);

    for (let i = 1; i < total; i++) {
        if (nums[i] <= nums[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
        if (nums[total - i - 1] <= nums[total - i]) {
            right[total - i - 1] = right[total - i] + 1;
        }
    }
    for (let i = k; i < total - k; i++) {
        if (left[i - 1] >= k && right[i + 1] >= k) {
            res.push(i);
        }
    }

    return res;
};
