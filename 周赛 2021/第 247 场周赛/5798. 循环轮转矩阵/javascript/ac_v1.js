/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const transfer = (n, count) => {
        for (let i = 0; i < count; i++) {
            const tmp = grid[n][n];
            // 顶行
            for (let j = n + 1; j < maxCol - n; j++) {
                grid[n][j - 1] = grid[n][j];
            }
            // 右列
            for (let j = n + 1; j < maxRow - n; j++) {
                grid[j - 1][maxCol - 1 - n] = grid[j][maxCol - 1 - n];
            }
            // 下行
            for (let j = maxCol - 2 - n; j >= n; j--) {
                grid[maxRow - 1 - n][j + 1] = grid[maxRow - 1 - n][j];
            }
            // 左列
            for (let j = maxRow - 2 - n; j >= n; j--) {
                grid[j + 1][n] = grid[j][n];
            }
            grid[n + 1][n] = tmp;
        }
    };

    for (let i = 0, len = Math.min(maxRow, maxCol) / 2; i < len; i++) {
        transfer(i, k % ((maxCol - i * 2) * 2 + ((maxRow - i * 2) - 2) * 2));
    }

    return grid;
};
