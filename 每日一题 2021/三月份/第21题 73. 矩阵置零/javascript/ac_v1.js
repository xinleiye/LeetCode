/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let firstRow = false;
    let firstCol = false;
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;

    for (let i = 0; i < maxCol; i++) {
        if (matrix[0][i] === 0) {
            firstRow = true;
            break;
        }
    }
    for (let i = 0; i < maxRow; i++) {
        if (matrix[i][0] === 0) {
            firstCol = true;
        }
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    for (let i = 1; i < maxRow; i++) {
        for (let j = 1; j < maxCol; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (firstCol) {
        for (let i = 0; i < maxRow; i++) {
            matrix[i][0] = 0;
        }
    }
    if (firstRow) {
        for (let i = 0; i < maxCol; i++) {
            matrix[0][i] = 0;
        }
    }
};
