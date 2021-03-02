/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (matrix.length > 0) {
        const maxRow = matrix.length;
        const maxCol = matrix[0].length;
        const sumMatrix = new Array(maxRow);

        for (let i = 0; i < maxRow; i++) {
            sumMatrix[i] = new Array(maxCol);
        }

        if (maxCol > 0) {
            sumMatrix[0][0] = matrix[0][0];
            for (let i = 1; i < maxCol; i++) {
                sumMatrix[0][i] = sumMatrix[0][i - 1] + matrix[0][i];
            }
            for (let i = 1; i < maxRow; i++) {
                sumMatrix[i][0] = sumMatrix[i - 1][0] + matrix[i][0];
            }
            for (let i = 1; i < maxRow; i++) {
                for (let j = 1; j < maxCol; j++) {
                    sumMatrix[i][j] = matrix[i][j] + sumMatrix[i][j - 1] + sumMatrix[i - 1][j] - sumMatrix[i - 1] [j - 1];
                }
            }
        }
        this.sumMatrix = sumMatrix;
    } else {
        this.sumMatrix = [];
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const sumMatrix = this.sumMatrix;

    if (sumMatrix.length === 0 || sumMatrix[0].length === 0) {
        return null;
    }
    if (row1 === 0 && col1 === 0) {
        return sumMatrix[row2][col2];
    } else if (row1 === 0) {
        return sumMatrix[row2][col2] - sumMatrix[row2][col1 - 1];
    } else if (col1 === 0) {
        return sumMatrix[row2][col2] - sumMatrix[row1 - 1][col2];
    } else {
        return sumMatrix[row2][col2] - sumMatrix[row2][col1 - 1] - sumMatrix[row1 - 1][col2] + sumMatrix[row1 - 1][col1 - 1];
    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
