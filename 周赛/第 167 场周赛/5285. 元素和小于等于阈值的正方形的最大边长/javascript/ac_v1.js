/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    let res = 0;
    let matRow = mat.length;
    let matCol = mat[0].length;
    let maxMatLength = matRow > matCol ? matCol : matRow;
    let isValid = (aRow, aCol, aLen) => {
        let sum = 0;
        let row = aRow + aLen - 1;
        let col = aCol + aLen - 1;

        if (row >= matRow || col >= matCol) {
            return false;
        }
        for (let i = 0; i < aLen; i++) {
            for (let j = 0; j < aLen; j++) {
                sum += mat[aRow + i][aCol + j];
                if (sum > threshold) {
                    return false;
                }
            }
        }
        return true;
    };

    for (let i = 1; i <= maxMatLength; i++) {
        let find = false;

        for (let j = 0; j < matRow; j++) {
            for (let k = 0; k < matCol; k++) {
                if (isValid(j, k, i)) {
                    find = true;
                    break;
                }
            }
            if (find) {
                break;
            }
        }
        if (find) {
            res = i;
        }
    }

    return res;
};
