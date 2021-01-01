/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let res = 0;
    const maxLength = 20;
    const maxRow = A.length;
    const maxCol = A[0].length;
    const weight = new Array(maxLength);

    for (let i = 0; i < maxLength; i++) {
        weight[i] = Math.pow(2, i);
    }

    // 将第一列全部置为 1
    for (let i = 0; i < maxRow; i++) {
        if (A[i][0] === 0) {
            for (let j = 0; j < maxCol; j++) {
                A[i][j] = A[i][j] === 1 ? 0 : 1;
            }
        }
    }

    // 对第二列及之后的每列，若 0 比 1 多，则移动
    for (let i = 1; i < maxCol; i++) {
        let zero = 0;

        for (let j = 0; j < maxRow; j++) {
            if (A[j][i] === 0) {
                zero++;
            }
        }
        if (zero > (maxRow >>> 1)) {
            for (let j = 0; j < maxRow; j++) {
                A[j][i] = A[j][i] === 1 ? 0 : 1;
            }
        }
    }

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            res += A[i][j] * weight[maxCol - 1 - j];
        }
    }

    return res;
};
