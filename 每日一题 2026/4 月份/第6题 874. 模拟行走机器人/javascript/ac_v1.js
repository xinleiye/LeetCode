/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let res = 0;
    // 北 东 南 西
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0;
    let y = 0;
    let d = 0;
    const obstacleSet = new Set();

    for (const [ox, oy] of obstacles) {
        obstacleSet.add(point2Num(ox, oy));
    }
    for (const c of commands) {
        if (c < 0) {
            d = (d + (c === -1 ? 1 : -1) + 4) % 4;
        } else {
            for (let i = 1; i <= c; i++) {
                if (obstacleSet.has(point2Num(x + dir[d][0], y + dir[d][1]))) {
                    break;
                }
                x += dir[d][0];
                y += dir[d][1];
            }
            res = Math.max(res, x * x + y * y);
        }
    }

    return res;
};

function point2Num(x, y) {
    return (x + 30000) << 16 | (y + 30000);
}
