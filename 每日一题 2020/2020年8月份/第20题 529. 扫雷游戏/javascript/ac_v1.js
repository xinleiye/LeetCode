/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let flag;
    let mMap = new Map();
    let maxRow = board.length;
    let maxCol = board[0].length;
    let directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    let getFlag = (aRow, aCol) => { return `${aRow}&${aCol}`; }
    let dfs = (aRow, aCol) => {
        if (board[aRow][aCol] !== "E") {
            return;
        }
        board[aRow][aCol] = "B";
        for (let i = 0; i < 8; i++) {
            let flag;
            let row = aRow + directions[i][0];
            let col = aCol + directions[i][1];

            if (row < 0 || row >= maxRow || col < 0 || col >= maxCol) {
                continue;
            }
            flag = getFlag(row, col);
            if (mMap.has(flag)) {
                board[row][col] = mMap.get(flag).toString();
            } else {
                dfs(row, col);
            }
        }
    };

    if (board[click[0]][click[1]] === "M") {
        board[click[0]][click[1]] = "X";
        return board;
    }

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (board[i][j] === "M") {
                for (let k = 0; k < 8; k++) {
                    let flag;
                    let row = i + directions[k][0];
                    let col = j + directions[k][1];

                    if (row < 0 || row >= maxRow || col < 0 || col >= maxCol || board[row][col] !== "E") {
                        continue;
                    }

                    flag = getFlag(row, col);
                    if (mMap.has(flag)) {
                        mMap.set(flag, mMap.get(flag) + 1);
                    } else {
                        mMap.set(flag, 1);
                    }
                }
            }
        }
    }

    flag = getFlag(click[0], click[1]);
    if (mMap.has(flag)) {
        board[click[0]][click[1]] = mMap.get(flag).toString();
        return board;
    } else {
        dfs(click[0], click[1]);
    }

    return board;
};
