/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let res = 0;
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(0));
    const dfsSearch = (row, col, pre) => {
        const cur = pre + grid[row][col];

        res = Math.max(res, cur);
        visited[row][col] = 1;
        for (const dir of directions) {
            const aRow = row + dir[0];
            const aCol = col + dir[1];

            if (aRow < 0 || aRow >= maxRow || aCol < 0 || aCol >= maxCol || visited[aRow][aCol] === 1 || grid[aRow][aCol] === 0) {
                continue;
            }
            dfsSearch(aRow, aCol, cur);
        }
        visited[row][col] = 0;
    };

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            dfsSearch(i, j, 0);
        }
    }

    return res;
};
