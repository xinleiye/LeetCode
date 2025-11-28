/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    const total = nums.length;
    const sumK = new Array(k).fill(Infinity);
    let res = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    // 前缀和从 -1 开始，-1 与 k - 1 模 k 同余。
    sumK[k - 1] = 0;
    for (let i = 0; i < total; i++) {
        sum += nums[i];
        res = Math.max(res, sum - sumK[i % k]);
        sumK[i % k] = Math.min(sumK[i % k], sum);
    }

    return res;
};
