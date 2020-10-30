/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let res = 0;
    let maxRow;
    let maxCol;
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    maxRow = grid.length;
    if (maxRow === 0) {
        return 0;
    }
    maxCol = grid[0].length;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === 1) {
                let row;
                let col;

                for (let k = 0; k < 4; k++) {
                    row = i + directions[k][0];
                    col = j + directions[k][1];
                    if (row < 0 || row >= maxRow || col < 0 || col >= maxCol || grid[row][col] === 0) {
                        res++;
                    }

                }
            }
        }
    }

    return res;
};
