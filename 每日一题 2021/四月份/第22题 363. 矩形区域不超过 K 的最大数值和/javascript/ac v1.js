/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var maxSumSubmatrix = function(matrix, k) {
    let res = -1e6;
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    const preSum = new Array(matrix.length + 1);

    for (let i = 0; i <= maxRow; i++) {
        preSum[i] = new Array(maxCol + 1).fill(0);
    }

    for (let i = 1; i <= maxCol; i++) {
        preSum[1][i] = preSum[1][i - 1] + matrix[0][i - 1];
    }
    for (let i = 1; i <= maxRow; i++) {
        preSum[i][1] = preSum[i - 1][1] + matrix[i - 1][0];
    }
    for (let i = 2; i <= maxRow; i++) {
        for (let j = 2; j <= maxCol; j++) {
            preSum[i][j] = preSum[i][j - 1] + preSum[i - 1][j] - preSum[i - 1][j - 1] + matrix[i - 1][j - 1];
        }
    }

    for (let i = 1; i <= maxRow; i++) {
        for (let j = 1; j <= maxCol; j++) {
            for (let row = 1; row <= i; row++) {
                for (let col = 1; col <= j; col++) {
                    let sum = preSum[i][j] - preSum[i][col - 1] - preSum[row - 1][j] + preSum[row - 1][col - 1];

                    if (sum > k) {
                        continue;
                    }
                    if (sum === k) {
                        return k;
                    }
                    if (k - sum < k - res) {
                        res = sum;
                    }
                }
            }
        }
    }

    return res;
};
