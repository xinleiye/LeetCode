/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const length = grid.length;
    const steps = length * 2 - 1;
    const pick = new Array(steps);

    for (let i = 0; i < steps; i++) {
        pick[i] = new Array(length);
        for (let j = 0; j < length; j++) {
            pick[i][j] = new Array(length).fill(Number.MIN_SAFE_INTEGER);
        }
    }
    pick[0][0][0] = grid[0][0];
    for (let i = 1; i < steps; i++) {
        for (let j = Math.max(0, i - length + 1); j <= Math.min(i, length - 1); j++) {
            if (grid[j][i - j] === -1) {
                continue;
            }
            for (let k = j; k <= Math.min(i, length - 1); k++) {
                if (grid[k][i - k] === -1) {
                    continue;
                }
                let num = pick[i - 1][j][k];
                if (j > 0) {
                    num = Math.max(num, pick[i - 1][j - 1][k]);
                }
                if (k > 0) {
                    num = Math.max(num, pick[i - 1][j][k - 1]);
                }
                if (j > 0 && k > 0) {
                    num = Math.max(num, pick[i - 1][j - 1][k - 1]);
                }
                num += grid[j][i - j];
                if (j !== k) {
                    num += grid[k][i - k];
                }
                pick[i][j][k] = num;
            }
        }
    }

    return Math.max(pick[steps - 1][length - 1][length - 1], 0);
};
