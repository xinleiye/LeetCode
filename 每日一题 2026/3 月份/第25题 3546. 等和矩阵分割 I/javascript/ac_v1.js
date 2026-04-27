/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let sum = 0;
    const rowSum = new Array(maxRow).fill(0);
    const colSum = new Array(maxCol).fill(0);

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            sum += grid[i][j];
            rowSum[i] += grid[i][j];
            colSum[j] += grid[i][j];
        }
    }
    if (sum % 2) {
        return false;
    }
    for (let i = 1; i < maxRow; i++) {
        if (rowSum[i - 1] * 2 === sum) {
            return true;
        }
        rowSum[i] += rowSum[i - 1];
    }
    for (let i = 1; i < maxCol; i++) {
        if (colSum[i - 1] * 2 === sum) {
            return true;
        }
        colSum[i] += colSum[i - 1];
    }

    return false;
};
