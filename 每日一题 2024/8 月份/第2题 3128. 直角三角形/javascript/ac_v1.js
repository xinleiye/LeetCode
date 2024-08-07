/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const rowSum = new Array(maxRow).fill(0);
    const colSum = new Array(maxCol).fill(0);
    let res = 0;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === 1) {
                rowSum[i]++;
                colSum[j]++;
            }
        }
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === 1) {
                res += (rowSum[i] - 1) * (colSum[j] - 1);
            }
        }
    }

    return res;
};
