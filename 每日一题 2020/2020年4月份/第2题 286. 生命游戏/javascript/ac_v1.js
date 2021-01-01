/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let res = new Array(board.length);
    let rowLen = board.length;
    let colLen = board[0].length;
    let directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

    for (let i = 0; i < rowLen; i++) {
        res[i] = new Array(colLen).fill(0);
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            let cellNum = 0;

            for (let k = 0; k < 8; k++) {
                let row = i + directions[k][0];
                let col = j + directions[k][1];

                if (row < 0 || row >= rowLen || col < 0 || col >= colLen) {
                    continue;
                }
                if (board[row][col] === 1) {
                    cellNum++;
                }
            }

            if (cellNum < 2) {
                res[i][j] = 0;
            } else if (cellNum === 2) {
                res[i][j] = board[i][j];
            } else if (cellNum === 3) {
                res[i][j] = 1;
            } else {
                res[i][j] = 0;
            }
        }
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            board[i][j] = res[i][j];
        }
    }
};
