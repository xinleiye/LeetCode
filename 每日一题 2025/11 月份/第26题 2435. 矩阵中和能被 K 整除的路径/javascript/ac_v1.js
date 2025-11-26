/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const MOD = 1e9 + 7;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const sum = new Array(maxRow).fill(0).map(() => new Array(maxCol));
    
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            sum[i][j] = new Array(k).fill(0);
        }
    }
    sum[0][0][grid[0][0] % k] = 1;
    for (let i = 1; i < maxRow; i++) {
        for (let j = 0; j < k; j++) {
            sum[i][0][j] = sum[i - 1][0][(j - (grid[i][0] % k) + k) % k];
        }
    }
    for (let i = 1; i < maxCol; i++) {
        for (let j = 0; j < k; j++) {
            sum[0][i][j] = sum[0][i - 1][(j - (grid[0][i] % k) + k) % k];
        }
    }
    for (let i = 1; i < maxRow; i++) {
        for (let j = 1; j < maxCol; j++) {
            const curVal = grid[i][j] % k;

            for (let m = 0; m < k; m++) {
                sum[i][j][m] = (sum[i - 1][j][(m - curVal + k) % k] + sum[i][j - 1][(m - curVal + k) % k]) % MOD;
            }
        }
    }

    return sum[maxRow - 1][maxCol - 1][0];
};
