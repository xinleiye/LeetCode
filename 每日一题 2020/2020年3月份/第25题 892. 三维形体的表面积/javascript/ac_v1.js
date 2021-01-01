/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let res = 0;
    let directions = [[-1, 0], [0, -1]];
    let rowLen = grid.length;
    let colLen = grid[0].length;

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            let num = grid[i][j];

            if (num > 0) {
                res += num * 6 - (num - 1) * 2;
            }
            for (let k = 0; k < 2; k++) {
                let row = i + directions[k][0];
                let col = j + directions[k][1];

                if (row < 0 || row >= rowLen || col < 0 || col >= colLen) {
                    continue;
                } else {
                    res -= Math.min(num, grid[row][col]) * 2;
                }
            }
        }
    }

    return res;
};
