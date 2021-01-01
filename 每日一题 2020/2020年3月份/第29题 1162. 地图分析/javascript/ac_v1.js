/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let target = null;
    let visited = new Array(grid.length);
    let pointQueue = [];
    let rowLen = grid.length;
    let colLen = grid[0].length;
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let i = 0; i < rowLen; i++) {
        visited[i] = new Array(colLen).fill(0);
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === 1) {
                pointQueue.push([i, j]);
                visited[i][j] = 1;
            }
        }
    }

    // 没有陆地或海洋
    if (pointQueue.length === 0 || pointQueue.length === rowLen * colLen) {
        return -1;
    }

    while (pointQueue.length) {
        target = pointQueue.shift();
        for (let i = 0; i < 4; i++) {
            let row = target[0] + directions[i][0];
            let col = target[1] + directions[i][1];

            if (row < 0 || row >= rowLen || col < 0 || col >= colLen || visited[row][col] > 0) {
                continue;
            }
            visited[row][col] = visited[target[0]][target[1]] + 1;
            pointQueue.push([row, col]);
        }
    }

    return visited[target[0]][target[1]] - 1;
};
