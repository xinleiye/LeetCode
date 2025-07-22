/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    const dp = new Array(k).fill(0).map(_ => new Array(k).fill(0));
    let res = 2;

    for (const n of nums) {
        const mod = n % k;

        for (let i = 0; i < k; i++) {
            dp[i][mod] = dp[mod][i] + 1;
            res = Math.max(res, dp[i][mod]);
        }
    }

    return res;
};
