/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    let res = new Array(mat.length);
    let matSum = new Array(mat.length + 1);
    let rowNum = mat.length;
    let colNum = mat[0].length;

    for (let i = 0; i < rowNum; i++) {
        res[i] = (new Array(colNum)).fill(0);
    }

    for (let i = 0, len = rowNum + 1; i < len; i++) {
        matSum[i] = (new Array(colNum + 1)).fill(0);
    }

    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            matSum[i + 1][j + 1] = matSum[i + 1][j] + mat[i][j];
        }
        for (let j = 0; j < colNum; j++) {
            matSum[i + 1][j + 1] += matSum[i][j + 1];
        }
    }

    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            let rowStart = i - K < 0 ? 0 : i - K;
            let rowEnd = (i + K >= rowNum ? rowNum - 1 : i + K) + 1;
            let colStart = j - K < 0 ? 0 : j - K;
            let colEnd = (j + K >= colNum ? colNum - 1 : j + K) + 1;

            res[i][j] = matSum[rowEnd][colEnd] - matSum[rowEnd][colStart] - matSum[rowStart][colEnd] + matSum[rowStart][colStart];
        }
    }

    return res;
};
