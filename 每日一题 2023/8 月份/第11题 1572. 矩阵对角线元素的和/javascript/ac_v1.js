/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let maxRow = mat.length;
    let res = 0;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            if (i === j) {
                res += mat[i][j];
            }
            if (i !== j && i + j === maxRow - 1) {
                res += mat[i][j];
            }
        }
    }

    return res;
};
