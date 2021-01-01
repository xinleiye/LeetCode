/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let res = new Array(matrix.length);
    let rowLen = matrix.length;
    let colLen = matrix[0].length;
    let visiteSet = new Set();
    let posQueue = [];
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for (let i = 0; i < rowLen; i++) {
        res[i] = new Array(colLen).fill(0);
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (matrix[i][j] === 0) {
                posQueue.push([i, j]);
                visiteSet.add(`${i}&${j}`);
            }
        }
    }

    while (posQueue.length) {
        let [x, y] = posQueue.shift();

        for (let i = 0; i < 4; i++) {
            row = x + directions[i][0];
            col = y + directions[i][1];

            if (row < 0 || row >= rowLen || col < 0 || col >= colLen || visiteSet.has(`${row}&${col}`)) {
                continue;
            }
            res[row][col] = res[x][y] + 1;
            posQueue.push([row, col]);
            visiteSet.add(`${row}&${col}`);
        }
    }

    return res;
};
