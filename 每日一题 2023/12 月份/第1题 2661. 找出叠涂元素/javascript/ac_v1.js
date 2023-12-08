/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const maxRow = mat.length;
    const maxCol = mat[0].length
    const total = maxRow * maxCol;
    const rowCount = new Array(maxRow).fill(0);
    const colCount = new Array(maxCol).fill(0);
    const numPos = new Array(total + 1).fill();

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            numPos[mat[i][j]] = [i, j];
        }
    }
    for (let i = 0; i < total; i++) {
        const [row, col] = numPos[arr[i]];

        rowCount[row]++;
        colCount[col]++;
        if (rowCount[row] === maxCol) {
            return i;
        }
        if (colCount[col] === maxRow) {
            return i;
        }
    }

    return -1;
};
