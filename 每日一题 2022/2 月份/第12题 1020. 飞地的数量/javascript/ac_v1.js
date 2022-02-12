/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(false));
    const dfsSearch = (row, col, info) => {
        if (row === 0 || row === maxRow - 1 || col === 0 || col === maxCol - 1) {
            info.status = 1;
        }
        info.count++;
        visited[row][col] = true;
        for (const dir of directions) {
            const aRow = row + dir[0];
            const aCol = col + dir[1];

            if (aRow < 0 || aRow >= maxRow || aCol < 0 || aCol >= maxCol || grid[aRow][aCol] === 0 || visited[aRow][aCol]) {
                continue;
            }
            dfsSearch(aRow, aCol, info);
        }
    };

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                const info = { status: 0, count: 0};

                dfsSearch(i, j, info);
                if (info.status === 0) {
                    res += info.count;
                }
            }
        }
    }

    return res;
};
