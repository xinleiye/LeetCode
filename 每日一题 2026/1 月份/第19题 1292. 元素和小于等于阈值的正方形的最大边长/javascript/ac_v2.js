/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    let res = 0;
    const maxRow = mat.length;
    const maxCol = mat[0].length;
    let left = 1;
    let right = maxRow > maxCol ? maxCol : maxRow;
    const matSum = new Array(maxRow + 1);

    for (let i = 0; i <= maxRow; i++) {
        matSum[i] = (new Array(maxCol + 1)).fill(0);
    }

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            matSum[i + 1][j + 1] = matSum[i + 1][j] + mat[i][j];
        }
        for (let j = 0; j < maxCol; j++) {
            matSum[i + 1][j + 1] += matSum[i][j + 1];
        }
    }

    while (left <= right) {
        let find = false;
        const mid = (left + right) >>> 1;

        for (let i = maxRow; i >= mid; i--) {
            for (let j = maxCol; j >= mid; j--) {
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
