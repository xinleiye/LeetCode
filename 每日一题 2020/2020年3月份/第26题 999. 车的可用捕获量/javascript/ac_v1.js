/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let rowLen = board.length;
    let colLen = board[0].length;
    let getRookCaptureNum = (rookRow, rookCol) => {
        let num = 0;

        for (let i = rookRow + 1; i < rowLen; i++) {
            if (board[i][rookCol] !== ".") {
                if (board[i][rookCol] === "p") {
                    num++;
                }
                break;
            }
        }
        for (let i = rookRow - 1; i >= 0; i--) {
            if (board[i][rookCol] !== ".") {
                if (board[i][rookCol] === "p") {
                    num++;
                }               
                break;
            }
        }
        for (let i = rookCol + 1; i < colLen; i++) {
            if (board[rookRow][i] !== ".") {
                if (board[rookRow][i] === "p") {
                    num++;
                }
                break;
            }
        }
        for (let i = rookCol - 1; i >= 0; i--) {
            if (board[rookRow][i] !== ".") {
                if (board[rookRow][i] === "p") {
                    num++;
                }
                break;
            }
        }

        return num;
    };

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (board[i][j] === "R") {
                return getRookCaptureNum(i, j);
            }
        }
    }
}
