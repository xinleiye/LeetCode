/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
    let res = 0;
    let left = 0;
    let right = row * col;

    while (left <= right) {
        const mid = (left + right) >>> 1;
        const grid = Array.from({ length: row }, _ => new Array(col).fill(0));
        const queue = [];

        for (let i = 0; i < mid; i++) {
            grid[cells[i][0] - 1][cells[i][1] - 1] = 1;
        }
        for (let i = 0; i < col; i++) {
            if (grid[0][i] === 0) {
                queue.push([0, i]);
                grid[0][i] = 1;
            }
        }
        if (bfsSearch(grid, queue)) {
            res = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};

function bfsSearch(grid, starts) {
    const row = grid.length;
    const col = grid[0].length;
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    while (starts.length) {
        const [r, c] = starts.shift();

        for (const [dr, dc] of dirs) {
            const aRow = r + dr;
            const aCol = c + dc;

            if (aRow >= 0 && aRow <= row && aCol >= 0 && aCol <= col && grid[aRow][aCol] === 0) {
                if (aRow === row - 1) {
                    return true;
                }
                starts.push([aRow, aCol]);
                grid[aRow][aCol] = 1;
            }
        }
    }

    return false;
}
