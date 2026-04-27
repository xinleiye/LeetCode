/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const maxRow = mat.length;
    const match = new Array(4).fill(true);

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            const val = mat[i][j];

            // 旋转 0 次
            if (val !== target[i][j]) {
                match[0] = false;
            }
            // 旋转 1 次
            if (val !== target[j][maxRow - i - 1]) {
                match[1] = false;
            }
            // 旋转 2 次
            if (val !== target[maxRow - i - 1][maxRow - j - 1]) {
                match[2] = false;
            }
            // 旋转 3 次
            if (val !== target[maxRow - j - 1][i]) {
                match[3] = false;
            }
        }
        if (!(match[0] || match[1] || match[2] || match[3])) {
            return false;
        }
    }

    return match[0] || match[1] || match[2] || match[3];
};
