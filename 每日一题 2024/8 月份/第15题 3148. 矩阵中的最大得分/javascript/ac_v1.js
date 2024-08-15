/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
    let res = Number.MIN_SAFE_INTEGER;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const minArr = new Array(maxRow + 1).fill(0).map(_ => new Array(maxCol + 1).fill(Number.MAX_SAFE_INTEGER));

    for (let i = 0; i < maxRow; i++) {
        minArr[i + 1][0] = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < maxCol; j++) {
            let min = Math.min(minArr[i + 1][j], minArr[i][j + 1]);

            res = Math.max(res, grid[i][j] - min);
            minArr[i + 1][j + 1] = Math.min(min, grid[i][j]);
        }
    }

    return res;
};
