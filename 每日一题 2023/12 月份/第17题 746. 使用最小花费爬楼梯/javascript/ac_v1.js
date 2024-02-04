/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const total = cost.length;
    const dp = [0, 0];

    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < total; i++) {
        const cur = cost[i] + Math.min(dp[0], dp[1]);

        dp[0] = dp[1];
        dp[1] = cur;
    }

    return Math.min(dp[0], dp[1]);
};
