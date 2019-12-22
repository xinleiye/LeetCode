/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    let res = 0;
    const matRow = mat.length;
    const matCol = mat[0].length;
    let left = 1;
    let right = matRow > matCol ? matCol : matRow;
    let matSum = new Array(matRow + 1);

    for (let i = 0; i <= matRow; i++) {
        matSum[i] = (new Array(matCol + 1)).fill(0);
    }

    for (let i = 0; i < matRow; i++) {
        for (let j = 0; j < matCol; j++) {
            matSum[i + 1][j + 1] = matSum[i + 1][j] + mat[i][j];
        }
        for (let j = 0; j < matCol; j++) {
            matSum[i + 1][j + 1] += matSum[i][j + 1];
        }
    }

    while (left <= right) {
        let find = false;
        let mid = (left + right) >>> 1;

        for (let i = matRow; i >= mid; i--) {
            for (let j = matCol; j >= mid; j--) {
                if (matSum[i][j] - matSum[i - mid][j] - matSum[i][j - mid] + matSum[i - mid][j - mid] <= threshold) {
                    find = true;
                    res = res > mid ? res : mid;
                }
            }
            if (find) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return res;
};
