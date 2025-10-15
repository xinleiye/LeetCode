/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const total = triangle.length;
    const dp = [...triangle[total - 1]];

    for (let i = total - 2; i >= 0; i--) {
        const len = triangle[i].length;

        for (let j = 0; j < len; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }

    return dp[0];
};
