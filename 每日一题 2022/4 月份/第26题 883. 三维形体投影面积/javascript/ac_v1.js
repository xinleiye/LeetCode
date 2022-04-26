/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let res = 0;
    const max = grid.length;

    for (const row of grid) {
        let rowMax = 0;
        for (const n of row) {
            if (n > 0) {
                res++;
            }
            rowMax = Math.max(rowMax, n);
        }
        res += rowMax;
    }
    for (let i = 0; i < max; i++) {
        let colMax = 0;
        for (let j = 0; j < max; j++) {
            colMax = Math.max(colMax, grid[j][i]);
        }
        res += colMax;
    }

    return res;
};
