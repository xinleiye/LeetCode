/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    let res = 1;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const preRowSum = new Array(grid.length);
    const preColSum = new Array(grid.length + 1);

    for (let i = 0; i < maxRow; i++) {
        preRowSum[i] = new Array(maxCol + 1).fill(0);
        for (let j = 1; j <= maxCol; j++) {
            preRowSum[i][j] = preRowSum[i][j - 1] + grid[i][j - 1];
        }
    }

    for (let i = 0; i <= maxRow; i++) {
        preColSum[i] = new Array(maxCol).fill(0);
        if (i !== 0) {
            for (let j = 0; j < maxCol; j++) {
                preColSum[i][j] = preColSum[i - 1][j] + grid[i - 1][j];
            }
        }
    }

    for (let i = 1; i < maxRow; i++) {
        for (let j = 1; j < maxCol; j++) {
            const k = Math.min(i, j);

            // 幻方长度
            for (let m = 0; (k - m + 1 > res) && m < k; m++) {
                let invalid = false;
                const startRow = i - k + m;
                const startCol = j - k + m;

                // 检测行
                for (let n = startRow; n < i; n++) {
                    if ((preRowSum[n][j + 1] - preRowSum[n][startCol]) !== (preRowSum[n + 1][j + 1] - preRowSum[n + 1][startCol])) {
                        invalid = true;
                        break;
                    }
                }
                if (invalid) {
                    continue;
                }
                // 检测列
                for (let n = startCol; n < j; n++) {
                    if ((preColSum[i + 1][n] - preColSum[startRow][n]) !== (preColSum[i + 1][n + 1] - preColSum[startRow][n + 1])) {
                        invalid = true;
                        break;
                    }
                }
                if (invalid) {
                    continue;
                }
                res = Math.max(res, k - m + 1);
            }
        }
    }

    return res;
};
