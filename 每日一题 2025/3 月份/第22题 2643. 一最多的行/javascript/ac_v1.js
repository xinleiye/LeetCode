/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let row = 0;
    let max1 = 0;
    const maxRow = mat.length;
    const maxCol = mat[0].length;

    for (let i = 0; i < maxRow; i++) {
        let count = 0;

        for (let j = 0; j < maxCol; j++) {
            if (mat[i][j] === 1) {
                count++;
            }
        }
        if (count > max1) {
            row = i;
            max1 = count;
        }
    }

    return [row, max1];
};
