/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    let res = 0;
    const maxRow = mat.length;
    const maxCol = mat[0].length;
    const preSum = Array.from({ length: maxRow + 1 }, _ => new Array(maxCol + 1).fill(0));

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            preSum[i + 1][j + 1] = mat[i][j] + preSum[i][j + 1] + preSum[i + 1][j] - preSum[i][j];
        }
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            for (let k = Math.min(i, j) + 1; k > res; k--) {
                if (preSum[i + 1][j + 1] - preSum[i + 1][j + 1 - k] - preSum[i + 1 - k][j + 1] + preSum[i + 1 - k][j + 1 - k] <= threshold) {
                    res = Math.max(k, res);
                    break;
                }
            }
        }
    }

    return res;
};
