/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const total = nums.length;
    const diff = new Array(total + 1).fill(0);
    for (let i = 0; i < total; i++) {
        if (nums[i] === key) {
            const left = Math.max(i - k, 0);
            const right = Math.min(i + k, total - 1);
            diff[left]++;
            diff[right + 1]--;
        }
    }

    const res = [];
    let sum = 0;
    for (let i = 0; i < total; i++) {
        sum += diff[i];
        if (sum > 0) {
            res.push(i);
        }
    }

    return res;
};
