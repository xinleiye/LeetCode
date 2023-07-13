/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const max = matrix.length;
    const dp = new Array(max).fill(0).map(() => new Array(max));
    const dir = [[-1, -1], [-1, 0], [-1, 1]];
    let res = 100000;

    for (let i = 0; i < max; i++) {
        dp[0][i] = matrix[0][i];
    }
    for (let i = 1; i < max; i++) {
        for (let j = 0; j < max; j++) {
            let min = 100000;

            for (const [row, col] of dir) {
                const aRow = i + row;
                const aCol = j + col;

                if (aRow < 0 || aRow >= max || aCol < 0 || aCol >= max) {
                    continue;
                }
                min = Math.min(min, dp[aRow][aCol]);
            }
            dp[i][j] = matrix[i][j] + min;
        }
    }
    for (let i = 0; i < max; i++) {
        res = Math.min(res, dp[max - 1][i]);
    }

    return res;
};
