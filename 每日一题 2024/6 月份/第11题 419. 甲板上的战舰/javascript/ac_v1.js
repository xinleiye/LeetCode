/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    const maxRow = board.length;
    const maxCol = board[0].length;
    let res = 0;

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (board[i][j] === "X") {
                if ((i > 0 && board[i - 1][j] === "X") || (j > 0 && board[i][j - 1] === "X")) {
                    continue;
                }
                res++;
            }
        }
    }

    return res;
};
