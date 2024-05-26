/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    const values = new Array(maxRow).fill(0).map(_ => new Array(maxCol));
    const xorVals = [];

    values[0][0] = matrix[0][0];
    xorVals.push(values[0][0]);
    for (let i = 1; i < maxCol; i++) {
        values[0][i] = matrix[0][i] ^ values[0][i - 1];
        xorVals.push(values[0][i]);
    }
    for (let i = 1; i < maxRow; i++) {
        values[i][0] = matrix[i][0] ^ values[i - 1][0];
        xorVals.push(values[i][0]);
    }
    for (let i = 1; i < maxRow; i++) {
        for (let j = 1; j < maxCol; j++) {
            values[i][j] = matrix[i][j] ^ values[i - 1][j - 1] ^ values[i][j - 1] ^ values[i - 1][j];
            xorVals.push(values[i][j]);
        }
    }
    xorVals.sort((v1, v2) => v2 - v1);

    return xorVals[k - 1];
};
