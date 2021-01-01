/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let maxRow = board.length;
    let maxCol;
    // 上 左 下 右
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let dfs = (aRow, aCol) => {
        if (aRow < 0 || aRow >= maxRow || aCol < 0 || aCol >= maxCol) {
            return;
        }
        if (board[aRow][aCol] !== "O") {
            return;
        }
        // 与边界相连的 O 标记为 A
        board[aRow][aCol] = "A";
        for (let i = 0; i < directions.length; i++) {
            dfs(aRow + directions[i][0], aCol + directions[i][1]);
        }
    };

    if (maxRow === 0) {
        return;
    } else {
        maxCol = board[0].length;
    }

    // 上下两个边界行
    for (let i = 0; i < maxCol; i++) {
        dfs(0, i);
        dfs(maxRow - 1, i);
    }
    // 左右两个边界列
    for (let i = 1; i < maxRow - 1; i++) {
        dfs(i, 0);
        dfs(i, maxCol - 1);
    }

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (board[i][j] === "A") {
                board[i][j] = "O";
            } else if (board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }
};
