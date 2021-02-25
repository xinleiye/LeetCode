/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let res;
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;

    res = new Array(maxCol);
    for (let i = 0; i < maxCol; i++) {
        res[i] = new Array(maxRow);
    }

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            res[j][i] = matrix[i][j];
        }
    }

    return res;
};
