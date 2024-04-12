/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    const total = grid.length;

    for (let i = 0; i < total; i++) {
        let hasWin = true;

        for (let j = 0; j < total; j++) {
            if (i !== j && grid[i][j] === 0) {
                hasWin = false;
                break;
            }
        }
        if (hasWin) {
            return i;
        }
    }

    return -1;
};
