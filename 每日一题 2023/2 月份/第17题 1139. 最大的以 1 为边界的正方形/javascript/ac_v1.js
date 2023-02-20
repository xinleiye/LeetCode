/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const left = new Array(maxRow + 1).fill(0).map(() => new Array(maxCol + 1).fill(0));
    const up = new Array(maxRow + 1).fill(0).map(() => new Array(maxCol + 1).fill(0));

    for (let i = 1; i <= maxRow; i++) {
        for (let j = 1; j <= maxCol; j++) {
            if (grid[i - 1][j - 1] === 1) {
                left[i][j] = left[i][j - 1] + 1;
                up[i][j] = up[i- 1][j] + 1;

                let maxLen = Math.min(left[i][j], up[i][j]);
                while (left[i - maxLen + 1][j] < maxLen || up[i][j - maxLen + 1] < maxLen) {
                    maxLen--;
                }
                res = Math.max(res, maxLen);
            }
        }
    }

    return res * res;
};
