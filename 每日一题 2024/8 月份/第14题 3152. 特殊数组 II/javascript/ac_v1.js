/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    const total = nums.length;
    let pre = nums[0] % 2;
    let cur = 0;
    const preSum = new Array(total);
    preSum[0] = 0;
    for (let i = 1; i < total; i++) {
        cur = nums[i] % 2;
        preSum[i] = preSum[i - 1] + (pre === cur ? 1 : 0);
        pre = cur;
    }

    const res = [];
    for (const [s, e] of queries) {
        res.push((preSum[e] - preSum[s]) === 0);
    }

    return res;
};
