/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const dp = new Array(3).fill(0);

    for (const n of nums) {
        const r = n % 3;
        const sum0 = dp[(3 + 0 - r) % 3];
        const sum1 = dp[(3 + 1 - r) % 3];
        const sum2 = dp[(3 + 2 - r) % 3];

        if (sum0 || r === 0) {
            dp[0] = Math.max(dp[0], sum0 + n);
        }
        if (sum1 || r === 1) {
            dp[1] = Math.max(dp[1], sum1 + n);
        }
        if (sum2 || r === 2) {
            dp[2] = Math.max(dp[2], sum2 + n);
        }
    }

    return dp[0];
};
