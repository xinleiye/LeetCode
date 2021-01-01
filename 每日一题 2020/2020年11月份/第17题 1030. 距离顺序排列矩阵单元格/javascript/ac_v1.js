/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    let res = [];
    // 上左下右
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let visited = new Array(R);
    let posQueue = [];

    for (let i = 0; i < R; i++) {
        visited[i] = new Array(C).fill(0);
    }

    posQueue.push(new Array(r0, c0));
    while (posQueue.length) {
        let pos = posQueue.shift();

        visited[pos[0]][pos[1]] = 1;
        res.push(new Array(pos[0], pos[1]));
        for (let i = 0; i < 4; i++) {
            let row = pos[0] + directions[i][0];
            let col = pos[1] + directions[i][1];

            if (row < 0 || row >= R || col < 0 || col >= C || visited[row][col]) {
                continue;
            } else {
                visited[row][col] = 2;
                posQueue.push(new Array(row, col));
            }
        }
    }

    return res;
};
