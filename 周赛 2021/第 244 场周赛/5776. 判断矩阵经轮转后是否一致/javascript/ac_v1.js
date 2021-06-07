/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const maxRow = mat.length;
    let unMatch = false;

    // 旋转 0 次
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            if (mat[i][j] !== target[i][j]) {
                unMatch = true;
                break;
            }
        }
        if (unMatch) {
            break;
        }
    }
    if (!unMatch) {
        return true;
    }

    // 1 次
    unMatch = false;
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            if (mat[i][j] !== target[j][maxRow - i - 1]) {
                unMatch = true;
                break;
            }
        }
        if (unMatch) {
            break;
        }
    }
    if (!unMatch) {
        return true;
    }

    // 2 次
    unMatch = false;
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            if (mat[i][j] !== target[maxRow - i - 1][maxRow - j - 1]) {
                unMatch = true;
                break;
            }
        }
        if (unMatch) {
            break;
        }
    }
    if (!unMatch) {
        return true;
    }

    // 3 次
    unMatch = false;
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            if (mat[i][j] !== target[maxRow - j - 1][i]) {
                unMatch = true;
                break;
            }
        }
        if (unMatch) {
            break;
        }
    }
    if (!unMatch) {
        return true;
    }

    return false;
};
