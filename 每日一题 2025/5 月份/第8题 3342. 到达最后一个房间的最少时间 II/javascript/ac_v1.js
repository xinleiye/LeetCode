/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    const n = moveTime.length;
    const m = moveTime[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]; 
    const d = Array.from({ length: n }, () => new Array(m).fill(Infinity));
    const v = Array.from({ length: n }, () => new Array(m).fill(false));
    const q = new PriorityQueue((a, b) => {
        return a.dist < b.dist ? -1 : 1;
    });
    d[0][0] = 0;
    q.enqueue({x: 0, y: 0, dist: 0});
    while (!q.isEmpty()) {
        const s = q.dequeue();
        if (v[s.x][s.y]) {
            continue;
        }
        if (s.x === n - 1 && s.y === m - 1) {
            break;
        }
        v[s.x][s.y] = true;

        const time = (s.x + s.y) % 2 === 1 ? 2 : 1;
        for (const [dx, dy] of dirs) {
            const nx = s.x + dx;
            const ny = s.y + dy;
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }

            const dist = Math.max(d[s.x][s.y], moveTime[nx][ny]) + time;
            if (d[nx][ny] > dist) {
                d[nx][ny] = dist;
                q.enqueue({x: nx, y: ny, dist: dist});
            }
        }
    }

    return d[n - 1][m - 1];
};
