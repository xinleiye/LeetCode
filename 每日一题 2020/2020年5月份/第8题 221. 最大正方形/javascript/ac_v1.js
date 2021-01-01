/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let maxSize = 0;
    let rowLen;
    let colLen;
    let sizeMap = new Array(matrix.length);

    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    rowLen = matrix.length;
    colLen = matrix[0].length;

    for (let i = 0; i < rowLen; i++) {
        sizeMap[i] = new Array(colLen);
        if (matrix[i][0] === "1") {
            sizeMap[i][0] = 1;
        } else {
            sizeMap[i][0] = 0;
        }
        maxSize = Math.max(sizeMap[i][0], maxSize);
    }

    for (let i = 0; i < colLen; i++) {
        if (matrix[0][i] === "1") {
            sizeMap[0][i] = 1;
        } else {
            sizeMap[0][i] = 0;
        }
        maxSize = Math.max(sizeMap[0][i], maxSize);
    }

    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            if (matrix[i][j] === "1") {
                sizeMap[i][j] = Math.min(Math.min(sizeMap[i][j - 1], sizeMap[i - 1][j]), sizeMap[i - 1][j - 1]) + 1;
                maxSize = Math.max(sizeMap[i][j], maxSize);
            } else {
                sizeMap[i][j] = 0;
            }
        }
    }

    return maxSize * maxSize;
};
