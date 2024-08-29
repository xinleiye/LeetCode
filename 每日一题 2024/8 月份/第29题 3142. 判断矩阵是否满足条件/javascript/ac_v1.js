/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol - 1; j++) {
            if (grid[i][j] === grid[i][j + 1]) {
                return false;
            }
        }
    }
    for (let i = 0; i < maxCol; i++) {
        for (let j = 0; j < maxRow - 1; j++) {
            if (grid[j][i] !== grid[j + 1][i]) {
                return false;
            }
        }
    }

    return true;
};
