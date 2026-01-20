/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    let res = 1;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const rowSum = Array.from({ length: maxRow + 1 }, _ => new Array(maxCol + 1).fill(0));
    const colSum = Array.from({ length: maxRow + 1 }, _ => new Array(maxCol + 1).fill(0));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            rowSum[i + 1][j + 1] = rowSum[i + 1][j] + grid[i][j];
            colSum[i + 1][j + 1] = colSum[i][j + 1] + grid[i][j];
        }
    }
    for (let i = 2; i <= maxRow; i++) {
        for (let j = 2; j <= maxCol; j++) {
            for (let k = Math.min(i, j); k > res; k--) {
                const tarSum = rowSum[i][j] - rowSum[i][j - k];

                if (checkRow(rowSum, i, j, k, tarSum) && checkCol(colSum, i, j, k, tarSum) && checkDiagonal(grid, i - 1, j - 1, k, tarSum)) {
                    res = Math.max(res, k);
                }
            }
        }
    }

    return res;
};

function checkRow(sum, startRow, startCol, length, tar) {
    for (let i = 0; i < length; i++) {
        if (sum[startRow - i][startCol] - sum[startRow - i][startCol - length] !== tar) {
            return false;
        }
    }

    return true;
}
function checkCol(sum, startRow, startCol, length, tar) {
    for (let i = 0; i < length; i++) {
        if (sum[startRow][startCol - i] - sum[startRow - length][startCol - i] !== tar) {
            return false;
        }
    }

    return true;
}
function checkDiagonal(grid, startRow, startCol, length, tar) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < length; i++) {
        sum1 += grid[startRow - i][startCol - i];
        sum2 += grid[startRow - i][startCol - length + i + 1];
    }

    return sum1 === tar && sum2 === tar;
}
