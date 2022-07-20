/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const res = new Array(maxRow).fill(0).map(() => new Array(maxCol));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            res[(Math.floor((j + k) / maxCol) + i) % maxRow][(j + k) % maxCol] = grid[i][j];
        }
    }

    return res;
};
