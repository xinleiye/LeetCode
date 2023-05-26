/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1) {
        return -1;
    }

    const n = grid.length;
    const dist = new Array(n).fill(0).map(() => new Array(0).fill(Number.MAX_SAFE_INTEGER));
    const stack = [[0, 0]];
    dist[0][0] = 1;
    while (stack.length) {
        const [x, y] = stack.shift();
        if (x === n - 1 && y === n - 1) {
            return dist[x][y];
        }
        for (let dx = -1; dx <= 1; dx++) {
            const ax = x + dx;
            if (ax < 0 || ax >= n) {
                continue;
            }
            for (let dy = -1; dy <= 1; dy++) {
                const ay = y + dy;
                if (ay < 0 || ay >= n) {
                    continue;
                }
                if (grid[ax][ay] > 0 || dist[ax][ay] <= dist[x][y] + 1) {
                    continue;
                }
                dist[ax][ay] = dist[x][y] + 1;
                stack.push([ax, ay]);
            }
        }
    }

    return -1;
};
