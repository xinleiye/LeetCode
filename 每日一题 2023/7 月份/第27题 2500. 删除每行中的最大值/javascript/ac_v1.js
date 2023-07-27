/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;

    for (const row of grid) {
        row.sort((n1, n2) => n2 - n1);
    }
    for (let i = 0; i < maxCol; i++) {
        let max = 0;

        for (let j = 0; j < maxRow; j++) {
            max = Math.max(max, grid[j][i]);
        }
        res += max;
    }

    return res;
};
