/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let res = 0;
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    const dp = new Array(maxRow).fill(0).map(_ => new Array(maxCol).fill(0));

    for (let i = 0; i < maxRow; i++) {
        dp[i][0] = matrix[i][0];
        res += dp[i][0];
    }
    for (let i = 1; i < maxCol; i++) {
        dp[0][i] = matrix[0][i];
        res += dp[0][i];
    }
    for (let i = 1; i < maxRow; i++) {
        for (let j = 1; j < maxCol; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
            res += dp[i][j];
        }
    }

    return res;
};
