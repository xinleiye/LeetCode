/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const maxRow = mat.length;
    const maxCol = mat[0].length;
    const numPos = new Array(maxRow * maxCol + 1).fill(0).map(() => new Array(2));
    const colorRow = new Array(maxRow).fill(0);
    const colorCol = new Array(maxCol).fill(0);

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            numPos[mat[i][j]][0] = i;
            numPos[mat[i][j]][1] = j;
        }
    }
    for (let i = 0; i < maxRow * maxCol; i++) {
        const [row, col] = numPos[arr[i]];

        colorRow[row]++;
        if (colorRow[row] === maxCol) {
            return i;
        }
        colorCol[col]++;
        if (colorCol[col] === maxRow) {
            return i;
        }
    }
};
