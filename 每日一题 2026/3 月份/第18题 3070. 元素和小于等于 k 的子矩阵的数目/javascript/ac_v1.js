/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(grid, k) {
    let res = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const sum = Array.from({length: maxRow + 1}, _ => new Array(maxCol + 1).fill(0));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            sum[i + 1][j + 1] = grid[i][j] + sum[i + 1][j] + sum[i][j + 1] - sum[i][j];
            if (sum[i + 1][j + 1] <= k) {
                res++;
            }
        }
    }

    return res;
};
