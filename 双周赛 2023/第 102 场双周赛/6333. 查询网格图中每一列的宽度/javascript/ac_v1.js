/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const res = new Array(maxCol).fill(0);

    for (let i = 0; i < maxCol; i++) {
        for (let j = 0; j < maxRow; j++) {
            let val = Math.abs(grid[j][i]);
            let width = grid[j][i] > 0 ? 0 : 1;

            while (val) {
                width++;
                val = Math.floor(val / 10);
            }
            res[i] = Math.max(res[i], width);
        }
    }
    
    return res;
};
