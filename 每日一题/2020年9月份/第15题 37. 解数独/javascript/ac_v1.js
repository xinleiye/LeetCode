/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let completed = false;
    let rowLack = new Array(9).fill(0);
    let colLack = new Array(9).fill(0);
    let gridLack = new Array(9).fill(0);
    let blankPos = [];
    let getMask = (index, type) => {
        let mask = 0;
        let val;

        if (type === 1) {
            for (let i = 0; i < 9; i++) {
                val = board[index][i];
                if (val !== ".") {
                    mask |= 1 << parseInt(val, 10);
                }
            }
        } else if (type === 2) {
            for (let i = 0; i < 9; i++) {
                val = board[i][index];
                if (val !== ".") {
                    mask |= 1 << parseInt(val, 10);
                }
            }
        } else if (type === 3) {
            let row;
            let col = (index % 3) * 3;

            if (index < 3) {
                row = 0;
            } else if (index < 6) {
                row = 3;
            } else if (index < 9) {
                row = 6;
            }
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    val = board[row + i][col + j];
                    if (val !== ".") {
                        mask |= 1 << parseInt(val, 10);
                    }
                }
            }
        }

        return mask;
    };
    let isComplete = () => {
        for (let i = 0; i < 9; i++) {
            if (rowLack[i] !== 1022 || colLack[i] !== 1022 || gridLack[i] !== 1022) {
                return false;
            }
        }
        return true;
    };
    let dfs = (index) => {
        let row;
        let col;
        let block;
        let lack;

        if (index >= blankPos.length) {
            return;
        }
        row = blankPos[index][0];
        col = blankPos[index][1];
        block = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        lack = rowLack[row] | colLack[col] | gridLack[block];

        for (let i = 1; i <= 9; i++) {
            if (!completed && (1 << i & lack) === 0) {
                rowLack[row] |= 1 << i;
                colLack[col] |= 1 << i;
                gridLack[block] |= 1 << i;
                board[row][col] = "" + i;
                if (isComplete()) {
                    completed = true;
                    break;
                }
                dfs(index + 1);
                rowLack[row] &= ~(1 << i);
                colLack[col] &= ~(1 << i);
                gridLack[block] &= ~(1 << i);
            }
        }
    };

    for (let i = 0; i < 9; i++) {
        rowLack[i] = getMask(i, 1);
        colLack[i] = getMask(i, 2);
        gridLack[i] = getMask(i, 3);
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                blankPos.push([i, j]);
            }
        }
    }

    dfs(0);
};
