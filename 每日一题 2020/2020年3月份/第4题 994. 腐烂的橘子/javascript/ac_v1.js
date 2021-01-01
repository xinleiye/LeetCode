/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let minute = -1;
    let rowLen = grid.length;
    let colLen = grid[0].length;
    let directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]; // 上下左右
    let rottens = [];
    let fresh = 0;

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === 2) {
                rottens.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    if (fresh === 0) {
        return 0;
    }

    while (rottens.length > 0) {
        let newRottens = [];

        for (let i = 0, len = rottens.length; i < len; i++) {
            let rotten = rottens[i];
    
            for (let j = 0; j < 4; j++) {
                let row = rotten[0] + directions[j][0];
                let col = rotten[1] + directions[j][1];

                if (row >= 0 && row < rowLen && col >= 0 && col < colLen && grid[row][col] === 1) {
                    grid[row][col] = 2;
                    newRottens.push([row, col]);
                    fresh--;
                }
            }

        }
        rottens = newRottens;
        minute++;
    }

    return fresh > 0 ? -1 : minute;
};
