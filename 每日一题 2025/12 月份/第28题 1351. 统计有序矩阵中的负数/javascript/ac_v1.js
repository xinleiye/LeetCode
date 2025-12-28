/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const maxRow = grid.length;
    let row = 0;
    let col = grid[0].length - 1;
    let res = 0;

    while (row < maxRow && col >= 0) {
        if (grid[row][col] < 0) {
            res += maxRow - row;
            col--;
        } else {
            row++;
        }
    }

    return res;
};
