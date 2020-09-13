/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let res = false;
    let maxRow = board.length;
    let maxCol = board[0].length;
    let visited = new Array(maxRow);
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let dfs = (aRow, aCol, index) => {
        if (res) {
            return;
        }

        if (index === word.length) {
            res = true;
            return;
        }

        for (let i = 0; i < directions.length; i++) {
            let row = aRow + directions[i][1];
            let col = aCol + directions[i][0];

            if (row < 0 || row >= maxRow || col < 0 || col >= maxCol || visited[row][col]) {
                continue;
            }
            visited[row][col] = true;
            if (board[row][col] === word[index]) {
                dfs(row, col, index + 1);
            }
            visited[row][col] = false;
        }
    };

    for (let i = 0; i < maxRow; i++) {
        visited[i] = new Array(maxCol).fill(false);
    }

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (!res && board[i][j] === word[0]) {
                visited[i][j] = true;
                dfs(i, j, 1);
                visited[i][j] = false;
            }
        }
    }

    return res;
};
