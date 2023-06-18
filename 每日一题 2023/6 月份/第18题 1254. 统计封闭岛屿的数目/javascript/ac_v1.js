/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let res = 0;
    const rowLength = grid.length;
    const colLength = grid[0].length;
    const directionRow = [0, 0, 1, -1];
    const directionCol = [1, -1, 0, 0];
    const walk = (row, col) => {
        let res = 0;

        if (col < 0 || col >= colLength || row < 0 || row >= rowLength) {
            return -1;
        }
        if (grid[row][col] === 1 || grid[row][col] === 2) {
            return 0;
        }
        grid[row][col] = 2;
        for (let i = 0; i < 4; i++) {
            let ret = walk(row + directionCol[i], col + directionRow[i]);

            if (ret === -1) {
                res = -1;
            }
        }
        return res;
    };

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (grid[i][j] === 0) {
                let ret = walk(i, j);

                if (ret !== -1) {
                    res++;
                }
            }
        }
    }

    return res;
};
