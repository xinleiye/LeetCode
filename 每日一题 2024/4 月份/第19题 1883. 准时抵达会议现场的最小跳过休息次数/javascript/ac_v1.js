/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
var minSkips = function(dist, speed, hoursBefore) {
    const total = dist.length;
    const dp = new Array(total + 1).fill(0).map(() => new Array(total + 1).fill(Number.MAX_SAFE_INTEGER));

    dp[0][0] = 0;
    for (let i = 0; i <= total; i++) {
        for (let j = 0; j <= i; j++) {
            if (j !== i) {
                dp[i][j] = Math.min(dp[i][j], Math.floor((dp[i - 1][j] + dist[i - 1] - 1) / speed + 1) * speed);
            }
            if (j !== 0) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + dist[i - 1]);
            }
        }
    }
    for (let i = 0; i <= total; i++) {
        if (dp[total][i] <= hoursBefore * speed) {
            return i;
        }
    }

    return -1;
};
