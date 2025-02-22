/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
var minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
    const length = floor.length;
    const dp = Array.from({ length: length + 1 }, () => new Array(numCarpets + 1).fill(Number.MAX_SAFE_INTEGER));

    for (let i = 0; i <= numCarpets; i++) {
        dp[0][i] = 0;
    }
    for (let i = 1; i <= length; i++) {
        dp[i][0] = dp[i - 1][0] + (floor[i - 1] === "1" ? 1 : 0);
    }
    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= numCarpets; j++) {
            dp[i][j] = dp[i - 1][j] + (floor[i - 1] === "1" ? 1 : 0);
            dp[i][j] = Math.min(dp[i][j], dp[Math.max(0, i - carpetLen)][j - 1]);
        }
    }

    return dp[length][numCarpets];
};
