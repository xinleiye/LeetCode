/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let res = 0;
    let curCol = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;

    for (const row of grid) {
        row.sort((n1, n2) => n2 - n1);
    }
    for (let i = 0; i < maxCol; i++) {
        let maxVal = grid[0][curCol];

        for (let j = 0; j < maxRow; j++) {
            maxVal = Math.max(maxVal, grid[j][curCol]);
        }
        res += maxVal;
        curCol++;
    }

    return res;
};
