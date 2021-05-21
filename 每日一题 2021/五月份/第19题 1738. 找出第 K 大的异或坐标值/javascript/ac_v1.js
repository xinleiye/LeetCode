/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    const buff = new Array(maxRow * maxCol);
    let buffIndex = 1;

    buff[0] = matrix[0][0];
    for (let i = 1; i < maxCol; i++) {
        matrix[0][i] ^= matrix[0][i - 1];
        buff[buffIndex++] = matrix[0][i];
    }
    for (let i = 1; i < maxRow; i++) {
        matrix[i][0] ^= matrix[i - 1][0];
        buff[buffIndex++] = matrix[i][0];
    }
    for (let i = 1; i < maxRow; i++) {
        for (let j = 1; j < maxCol; j++) {
            matrix[i][j] ^= matrix[i - 1][j - 1] ^ matrix[i][j - 1] ^ matrix[i - 1][j];
            buff[buffIndex++] = matrix[i][j];
        }
    }

    buff.sort((val1, val2) => {
        return val2 - val1;
    });

    return buff[k - 1];
};
