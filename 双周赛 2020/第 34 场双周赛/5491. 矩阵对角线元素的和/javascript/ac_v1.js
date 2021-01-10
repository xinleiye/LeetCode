/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0;
    let maxLength = mat.length;
    let getSum = (row, col, diffRow, diffCol) => {
        for (let i = 0; i < maxLength; i++) {
            res += mat[row][col];
            row += diffRow;
            col += diffCol;
        }
    };
    
    getSum(0, 0, 1, 1);
    getSum(maxLength - 1, 0, -1, 1);
    
    return maxLength % 2 === 1 ? res - mat[(maxLength - 1) / 2][(maxLength - 1) / 2] : res;
};
