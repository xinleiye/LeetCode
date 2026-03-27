/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    const maxRow = mat.length;
    const maxCol = mat[0].length;

    k = k % maxCol;
    for (let i = 0; i < maxRow; i++) {
        const diff = (i % 2 === 1) ? k : (maxCol - k);

        for (let j = 0; j < maxCol; j++) {
            if (mat[i][j] !== mat[i][(diff + j) % maxCol]) {
                return false;
            }
        }
    }

    return true;
};
