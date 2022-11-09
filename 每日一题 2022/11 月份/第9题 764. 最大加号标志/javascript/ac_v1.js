/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(1));
    for (const [x, y] of mines) {
        matrix[x][y] = 0;
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j]) {
                // 上
                let up = 1;
                for (let k = i - 1; k >= 0; k--) {
                    if (matrix[k][j]) {
                        up++;
                    } else {
                        break;
                    }
                }

                // 右
                let right = 1;
                for (let k = j + 1; k < n; k++) {
                    if (matrix[i][k]) {
                        right++;
                    } else {
                        break;
                    }
                }

                // 下
                let down = 1;
                for (let k = i + 1; k < n; k++) {
                    if (matrix[k][j]) {
                        down++;
                    } else {
                        break;
                    }
                }

                // 左
                let left = 1;
                for (let k = j - 1; k >= 0; k--) {
                    if (matrix[i][k]) {
                        left++;
                    } else {
                        break;
                    }
                }

                res = Math.max(res, Math.min(up, right, down, left));
            }
        }
    }

    return res;
};
