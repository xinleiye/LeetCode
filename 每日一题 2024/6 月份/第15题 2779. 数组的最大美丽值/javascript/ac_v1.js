/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    let res = 0;
    let sum = 0;
    const max = getMax(nums);
    const diff = new Array(max + 2).fill(0);

    for (const n of nums) {
        diff[Math.max(n - k, 0)]++;
        diff[Math.min(n + k + 1, max + 1)]--;
    }
    for (const d of diff) {
        sum += d;
        res = Math.max(res, sum);
    }

    return res;
};

function getMax(arr) {
    let max = 0;

    for (const n of arr) {
        max = Math.max(n, max);
    }

    return max
}
