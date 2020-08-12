/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let maxRow = board.length;
    let maxCol;
    let visited = new Array(maxRow);
    let posO = [];
    // 上 左 下 右
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    // 1: 边界; 2: X; 3: 已经遍历过 的 O. 单从本题来说，其实没必要区分 2 与 3。
    let dfs = (aRow, aCol) => {
        let ret = 3;

        if (aRow < 0 || aRow >= maxRow || aCol < 0 || aCol >= maxCol) {
            return 1;
        }
        if (board[aRow][aCol] === "X") {
            return 2;
        }
        if (visited[aRow][aCol]) {
            return 3;
        }

        visited[aRow][aCol] = true;
        posO.push([aRow, aCol]);
        for (let i = 0; i < directions.length; i++) {
            if (dfs(aRow + directions[i][0], aCol + directions[i][1]) === 1) {
                ret = 1;
            }
        }

        return ret === 1 ? 1 : 3;
    };

    if (maxRow === 0) {
        return;
    } else {
        maxCol = board[0].length;
    }

    for (let i = 0; i < maxRow; i++) {
        visited[i] = new Array(maxCol).fill(false);
    }

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (board[i][j] === "O" && visited[i][j] === false) {
                posO = [];
                if (dfs(i, j) === 3) {
                    for (item of posO) {
                        board[item[0]][item[1]] = "X";
                    }
                }
            }
        }
    }
};
