/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let res = 0;
    const maxRowNum = grid.length;
    const rowMax = new Array(grid.length).fill(0);
    const colMax = new Array(grid.length).fill(0);

    for (let i = 0; i < maxRowNum; i++) {
        for (let j = 0; j < maxRowNum; j++) {
            rowMax[i] = Math.max(rowMax[i], grid[i][j]);
            colMax[i] = Math.max(colMax[i], grid[j][i]);
        }
    }
    for (let i = 0; i < maxRowNum; i++) {
        for (let j = 0; j < maxRowNum; j++) {
            res += Math.min(rowMax[j], colMax[i]) - grid[i][j];
        }
    }

    return res;
};
