/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let res = 0;
    const maxRow = mat.length;
    const maxCol = mat[0].length;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (mat[i][j] === 1) {
                let valid = true;

                for (let k = 0; k < maxCol; k++) {
                    if (k !== j && mat[i][k] === 1) {
                        valid = false;
                        break;
                    }
                }
                if (!valid) {
                    continue;
                }
                valid = true;
                for (let k = 0; k < maxRow; k++) {
                    if (k !== i && mat[k][j] === 1) {
                        valid = false;
                    }
                }
                if (valid) {
                    res++;
                }
            }
        }
    }

    return res;
};
