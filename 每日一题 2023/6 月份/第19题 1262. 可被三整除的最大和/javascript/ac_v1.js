/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const dp = [0, 0, 0];

    for (const n of nums) {
        const mod = n % 3;
        const a = dp[(3 + 0 - mod) % 3];
        const b = dp[(3 + 1 - mod) % 3];
        const c = dp[(3 + 2 - mod) % 3];

        if (a || mod === 0) {
            dp[0] = Math.max(dp[0], a + n);
        }
        if (b || mod === 1) {
            dp[1] = Math.max(dp[1], b + n);
        }
        if (c || mod === 2) {
            dp[2] = Math.max(dp[2], c + n);
        }
    }

    return dp[0];
};
