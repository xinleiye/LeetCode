/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const colMax = new Array(col);
    const res = new Array(row).fill(0).map(_ => new Array(col));

    for (let i = 0; i < col; i++) {
        let max = matrix[0][i];

        for (let j = 0; j < row; j++) {
            max = Math.max(max, matrix[j][i]);
        }
        colMax[i] = max;
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            res[i][j] = matrix[i][j] !== -1 ? matrix[i][j] : colMax[j];
        }
    }

    return res;
};
