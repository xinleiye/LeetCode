/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function(grid) {
    const maxRow = grid.length;
    const maxCol = grid[0].length;
    let sx = 0;
    let sy = 0;
    let bx = 0;
    let by = 0;
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (grid[i][j] === "S") {
                sx = i;
                sy = j;
            } else if (grid[i][j] === "B") {
                bx = i;
                by = j;
            }
        }
    }

    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = new Array(maxRow * maxCol).fill(0).map(() => new Array(maxRow * maxCol).fill(Number.MAX_SAFE_INTEGER));
    let queue = [[sx * maxCol + sy, bx * maxCol + by]];
    visited[sx * maxCol + sy][bx * maxCol + by] = 0;
    while (queue.length) {
        const newQueue = [];
        while (queue.length) {
            const [curS, curB] = queue.shift();
            const curSx = Math.floor(curS / maxCol);
            const curSy = curS % maxCol;
            const curBx = Math.floor(curB / maxCol);
            const curBy = curB % maxCol;
            if (grid[curBx][curBy] === "T") {
                return visited[curS][curB];
            }
            for (const [dx, dy] of dir) {
                const nextSx = curSx + dx;
                const nextSy = curSy + dy;
                const nextS = nextSx * maxCol + nextSy;
                if (!validPos(grid, nextSx, nextSy)) {
                    continue;
                }
                // 人移动到箱子位置，箱子向相同方向移动一次
                if (nextSx === curBx && nextSy === curBy) {
                    const nextBx = curBx + dx;
                    const nextBy = curBy + dy;
                    const nextB = nextBx * maxCol + nextBy;
                    if (!validPos(grid, nextBx, nextBy) || visited[nextS][nextB] <= visited[curS][curB] + 1) {
                        continue;
                    }
                    visited[nextS][nextB] = visited[curS][curB] + 1;
                    newQueue.push([nextS, nextB]);
                } else {
                    if (visited[nextS][curB] <= visited[curS][curB]) {
                        continue;
                    }
                    visited[nextS][curB] = visited[curS][curB];
                    queue.push([nextS, curB]);
                }
            }
        }
        queue = newQueue;
    }

    return -1;
};

function validPos(grid, x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] !== "#";
}
