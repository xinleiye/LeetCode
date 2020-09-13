/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let res = 0;
    let maxRow = mat.length;
    let maxCol = mat[0].length;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            let isValid = true;

            if (mat[i][j] === 1) {
                for (let k = 0; k < maxRow; k++) {
                    if (k === i) {
                        continue;
                    }
                    if (mat[k][j] === 1) {
                        isValid = false;
                        break;
                    }
                }
                if (!isValid) {
                    break;
                }
                for (let k = 0; k < maxCol; k++) {
                    if (k === j) {
                        continue;
                    }
                    if (mat[i][k] === 1) {
                        isValid = false;
                        break;
                    }
                }
                if (isValid) {
                    res++;
                }
            }
        }
    }

    return res;
};
