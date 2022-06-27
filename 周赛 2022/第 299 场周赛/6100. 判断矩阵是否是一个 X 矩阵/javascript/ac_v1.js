/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    const maxRow = grid.length;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxRow; j++) {
            if ((i === j) || (i + j === maxRow - 1)) {
                if (grid[i][j] === 0) {
                    return false;
                }
            } else {
                if (grid[i][j] !== 0) {
                    return false;
                }
            }
        }
    }

    return true;
};
