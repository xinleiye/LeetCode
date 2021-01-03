/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let res = "";
    let movesA = [];
    let movesB = [];
    let isWin = (move) => {
        let res = false;
        let wins = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]]
        ];
        for (let i = 0; i < 8; i++) {
            let nums = 0;
            let aWin = wins[i];
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < move.length; k++) {
                    if (move[k][0] === aWin[j][0] && move[k][1] === aWin[j][1]) {
                        nums++;
                    }
                }
            }
            if (nums === 3) {
                res = true;
                break;
            }
        }
        return res;
    };

    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            movesA.push(moves[i]);
        } else {
            movesB.push(moves[i]);
        }
    }
    if (isWin(movesA)) {
        res = "A";
    } else if (isWin(movesB)) {
        res = "B";
    } else {
        if (moves.length === 9) {
            res = "Draw"
        } else {
            res = "Pending";
        }
    }

    return res;
};
