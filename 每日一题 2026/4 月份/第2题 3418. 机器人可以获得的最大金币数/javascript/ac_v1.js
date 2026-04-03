/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {
    const maxRow = coins.length;
    const maxCol = coins[0].length;
    const dp = Array.from({length: maxRow}, _ => Array.from({length: maxCol}, _ => new Array(3).fill(Number.MIN_SAFE_INTEGER)));

    dp[0][0][0] = coins[0][0];
    for (let i = 1; i <= 2; i++) {
        dp[0][0][i] = Math.max(0, coins[0][0]);
    }
    for (let i = 1; i < maxRow; i++) {
        dp[i][0][0] = dp[i - 1][0][0] + coins[i][0];
        for (let j = 1; j <= 2; j++) {
            dp[i][0][j] = Math.max(dp[i - 1][0][j] + coins[i][0], dp[i - 1][0][j - 1] + Math.max(coins[i][0], 0));
        }
    }
    for (let i = 1; i < maxCol; i++) {
        dp[0][i][0] = dp[0][i - 1][0] + coins[0][i];
        for (let j = 1; j <= 2; j++) {
            dp[0][i][j] = Math.max(dp[0][i - 1][j] + coins[0][i], dp[0][i - 1][j - 1] + Math.max(coins[0][i], 0));
        }
    }
    for (let i = 1; i < maxRow; i++) {
        for (let j = 1; j < maxCol; j++) {
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i][j - 1][0]) + coins[i][j];
            for (let k = 1; k <= 2; k++) {
                dp[i][j][k] = Math.max(Math.max(dp[i - 1][j][k], dp[i][j - 1][k]) + coins[i][j], Math.max(dp[i - 1][j][k - 1], dp[i][j - 1][k - 1]));
            }
        }
    }

    return dp[maxRow - 1][maxCol - 1][2];
};
