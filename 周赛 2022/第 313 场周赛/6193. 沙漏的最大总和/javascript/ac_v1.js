/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let res = 0;

    for (let i = 2; i < maxRow; i++) {
        for (let j = 2; j < maxCol; j++) {
            let sum = 0;

            for (let k = 2; k >= 0; k--) {
                sum += grid[i][j - k];
            }
            for (let k = 2; k >= 0; k--) {
                sum += grid[i - 2][j - k];
            }
            sum += grid[i - 1][j - 1];

            res = Math.max(res, sum);
        }
    }

    return res;
};
