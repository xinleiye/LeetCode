/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let row = 0;
    let col = 0;
    const MAX = 8;
    for (let i = 0; i < MAX; i++) {
        for (let j = 0; j < MAX; j++) {
            if (board[i][j] === "R") {
                row = i;
                col = j;
            }
        }
    }

    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let res = 0;
    for (const [r, c] of dir) {
        let aRow = row + r;
        let aCol = col + c;

        while (aRow < MAX && aRow >= 0 && aCol < MAX && aCol >= 0) {
            if (board[aRow][aCol] !== ".") {
                if (board[aRow][aCol] === "p") {
                    res++;
                }
                break;
            }
            aRow += r;
            aCol += c;
        }
    }

    return res;
};
