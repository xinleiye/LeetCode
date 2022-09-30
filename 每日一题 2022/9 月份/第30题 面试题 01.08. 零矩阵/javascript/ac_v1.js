/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    const zeroRow = [];
    const zeroCol = [];

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (matrix[i][j] === 0) {
                zeroRow.push(i);
                zeroCol.push(j);
            }
        }
    }
    for (const row of zeroRow) {
        for (let k = 0; k < maxCol; k++) {
            matrix[row][k] = 0;
        }
    }
    for (const col of zeroCol) {
        for (let k = 0; k < maxRow; k++) {
            matrix[k][col] = 0;
        }
    }
};
