/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const maxValRow = new Array(maxRow).fill(0);
    const maxValCol = new Array(maxRow).fill(0);

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            maxValRow[i] = Math.max(maxValRow[i], grid[i][j]);
            maxValCol[j] = Math.max(maxValCol[j], grid[i][j]);
        }
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            res += Math.min(maxValRow[i], maxValCol[j]) - grid[i][j];
        }
    }

    return res;
};
