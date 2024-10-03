/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function(maxTime, edges, passingFees) {
    const n = passingFees.length;
    const dp = new Array(maxTime + 1).fill(0).map(() => new Array(n).fill(Infinity));
    let res = Infinity;

    dp[0][0] = passingFees[0];
    for (let i = 1; i <= maxTime; i++) {
        for (const [s, e, t] of edges) {
            if (t <= i) {
                if (dp[i - t][s] !== Infinity) {
                    dp[i][e] = Math.min(dp[i][e], dp[i - t][s] + passingFees[e]);
                }
                if (dp[i - t][e] !== Infinity) {
                    dp[i][s] = Math.min(dp[i][s], dp[i - t][e] + passingFees[s]);
                }
            }
        }
    }
    for (let i = 1; i <= maxTime; i++) {
        res = Math.min(res, dp[i][n - 1]);
    }

    return res === Infinity ? -1 : res;
};
