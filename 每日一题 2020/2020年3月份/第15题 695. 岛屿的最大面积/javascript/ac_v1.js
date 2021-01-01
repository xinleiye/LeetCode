/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    let rowLen = grid.length;
    let colLen = grid[0].length;
    let directionRow = [0, 0, 1, -1];
    let directionCol = [1, -1, 0, 0];
    let walk = (row, col) => {
        let res = 1;

        if (row < 0 || row >= rowLen || col < 0 || col >= colLen || grid[row][col] === 0) {
            return 0;
        }

        grid[row][col] = 0;
        for (let i = 0; i < 4; i++) {
            res += walk(row + directionRow[i], col + directionCol[i]);
        }

        return res;
    };

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            res = Math.max(res, walk(i, j));
        }
    }

    return res;
};
