/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    // 0: 最小；1: 最大
    let cur = Array.from({length: 2}, _ => new Array(maxCol));
    let next = Array.from({length: 2}, _ => new Array(maxCol));

    cur[0][0] = grid[0][0];
    cur[1][0] = grid[0][0];
    for (let i = 1; i < maxCol; i++) {
        cur[0][i] = cur[0][i - 1] * grid[0][i];
        cur[1][i] = cur[1][i - 1] * grid[0][i];
    }
    for (let i = 1; i < maxRow; i++) {
        next[0][0] = Math.min(cur[0][0], cur[1][0]) * grid[i][0];
        next[1][0] = Math.max(cur[0][0], cur[1][0]) * grid[i][0];
        for (let j = 1; j < maxCol; j++) {
            if (grid[i][j] >= 0) {
                next[0][j] = Math.min(cur[0][j], next[0][j - 1]) * grid[i][j];
                next[1][j] = Math.max(cur[1][j], next[1][j - 1]) * grid[i][j];
            } else {
                next[0][j] = Math.max(cur[1][j], next[1][j - 1]) * grid[i][j];
                next[1][j] = Math.min(cur[0][j], next[0][j - 1]) * grid[i][j];
            }
        }
        [cur, next] = [next, cur];
    }

    return cur[1][maxCol - 1] < 0 ? -1 : cur[1][maxCol - 1] % (1e9 + 7);
};
