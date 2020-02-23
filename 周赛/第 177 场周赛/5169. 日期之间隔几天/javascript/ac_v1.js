/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let res = 0;
    let rowLen = grid.length;
    let colLen = grid[0].length;

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] < 0) {
                res += colLen - j;
                break;
            }
        }
    }

    return res;
};
