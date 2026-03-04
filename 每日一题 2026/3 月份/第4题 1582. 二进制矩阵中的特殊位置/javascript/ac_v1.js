/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const maxRow = mat.length;
    const maxCol = mat[0].length;
    let res = 0;

    for (let i = 0; i < maxRow; i++) {
        let sum = 0;
        let col = -1;

        for (let j = 0; j < maxCol; j++) {
            sum += mat[i][j];
            if (mat[i][j] === 1) {
                col = j;
            }
        }
        if (sum !== 1) {
            continue;
        }

        sum = 0;
        for (let j = 0; j < maxRow; j++) {
            sum += mat[j][col];
        }
        if (sum === 1) {
            res++;
        }
    }

    return res;
};
