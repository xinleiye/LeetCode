/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
    const MOD = 12345;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let prefix = 1;
    let suffix = 1;
    const res = Array.from({length: maxRow}, _ => new Array(maxCol));

    for (let i = maxRow - 1; i >= 0; i--) {
        for (let j = maxCol - 1; j >= 0; j--) {
            res[i][j] = suffix;
            suffix = (suffix * grid[i][j]) % MOD;
        }
    }
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            res[i][j] = (prefix * res[i][j]) % MOD;
            prefix = (prefix * grid[i][j]) % MOD;
        }
    }

    return res;
};
