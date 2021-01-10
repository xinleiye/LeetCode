/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    let mod = 1e9 + 7;
    let directions = [[1, 0], [0, 1], [1, 1]];
    let maxRow = board.length;
    let maxCol = board[0].length;
    let sums = new Array(maxRow);
    let count = new Array(maxRow);

    for (let i = 0; i < maxRow; i++) {
        sums[i] = (new Array(maxCol)).fill(0);
        count[i] = (new Array(maxCol)).fill(0);
    }

    count[maxRow - 1][maxCol - 1] = 1;
    for (let i = maxRow - 1; i >= 0; i--) {
        for (let j = maxCol - 1; j >= 0; j--) {
            let val;

            if (board[i][j] === "X" || board[i][j] === "S") {
                continue;
            }

            if (board[i][j] === "E") {
                val = 0;
            } else {
                val = parseInt(board[i][j], 10);
            }
            for (let k = 0; k < directions.length; k++) {
                let sum;
                let row = i + directions[k][0];
                let col = j + directions[k][1];

                // count[row][col] === 0 时，说明无法到达当前位置
                if (row >= maxRow || col >= maxCol || board[row][col] === "X" || count[row][col] === 0) {
                    continue;
                }
                sum = val + sums[row][col];
                // 状态转移方程：
                // sums[i][j] = Math.max(sums[i + 1][j], sums[i][j + 1], sums[i + 1][j + 1]) + board[i][j]
                // count[i][j] = board[i][j] + sums[row][col] > sums[row][col] ? count[row][col] : (count[row][col] + count[i][j]) % mod
                if (sum > sums[i][j]) {
                    sums[i][j] = sum;
                    count[i][j] = count[row][col];
                } else if (sum === sums[i][j]) {
                    count[i][j] = (count[row][col] + count[i][j]) % mod;
                }
            }
        }
    }

    return [sums[0][0], count[0][0]];
};
