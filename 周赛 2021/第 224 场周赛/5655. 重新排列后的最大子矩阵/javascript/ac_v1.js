/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    let res = 0;
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    
    for (let i = 1; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }

    for (let i = 0; i < maxRow; i++) {
        matrix[i].sort((val1, val2) => {
            return val1 - val2;
        });
        for (let j = 0; j < maxCol; j++) {
            res = Math.max(res, matrix[i][j] * (maxCol - j));
        }
    }

    return res;
};
