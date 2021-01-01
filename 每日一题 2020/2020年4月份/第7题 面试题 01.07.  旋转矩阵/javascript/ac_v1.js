/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let matrixSize = matrix.length;

    // (i, j) -> (j, n - i - 1) -> (n - i - 1, n - j - 1) -> (n - j - 1, i) -> (i, j)
    for (let i = 0, rowLen = Math.floor(matrixSize / 2); i < rowLen; i++) {
        for (let j = 0, colLen = Math.floor((matrixSize + 1) / 2); j < colLen; j++) {
            let tmp = matrix[i][j];

            matrix[i][j] = matrix[matrixSize - j - 1][i];
            matrix[matrixSize - j - 1][i] = matrix[matrixSize - i - 1][matrixSize - j - 1];
            matrix[matrixSize - i - 1][matrixSize - j - 1] = matrix[j][matrixSize - i - 1];
            matrix[j][matrixSize - i - 1] = tmp;
        }
    }
};
