/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let res = 0;
    let matrixRow = matrix.length;
    let matrixCol = matrix[0].length;
    let maxLength = Math.min(matrixRow, matrixCol);
    let matrixMap = new Array(matrixRow);
    let isSquare = (aPosRow, aPosCol, aLength) => {
        let row = aPosRow + aLength - 1;
        let col = aPosCol + aLength - 1;

        if (row >= matrixRow || col >= matrixCol) {
            return false;
        }
        for (let i = 0; i < aLength; i++) {
            if (matrix[row][aPosCol + i] === 0) {
                return false;
            }
        }
        for (let i = 0; i < aLength; i++) {
            if (matrix[aPosRow + i][col] === 0) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < matrix.length; i++) {
        matrixMap[i] = (new Array(matrix[0].length)).fill(0);
    }

    for (let i = 1; i <= maxLength; i++) {
        for (let j = 0; j < matrixRow; j++) {
            for (let k = 0; k < matrixCol; k++) {
                if (matrixMap[j][k] === (i - 1) && isSquare(j, k, i)) {
                    matrixMap[j][k]++;
                    res++;
                }
            }
        }
    }

    return res;
};
