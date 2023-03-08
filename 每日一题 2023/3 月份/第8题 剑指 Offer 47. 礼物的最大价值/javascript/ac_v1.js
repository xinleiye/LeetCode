/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const dp = new Array(2).fill(0).map(() => new Array(maxCol + 1).fill(0));

    for (let i = 0; i < maxRow; i++) {
        const row = dp[(i + 1) % 2];

        for (let j = 0; j < maxCol; j++) {
            row[j + 1] = Math.max(row[j], dp[i % 2][j + 1]) + grid[i][j];
        }
    }

    return dp[maxRow % 2][maxCol];
};
