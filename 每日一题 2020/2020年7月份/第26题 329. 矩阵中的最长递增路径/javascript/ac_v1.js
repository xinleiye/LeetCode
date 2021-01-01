/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let res = 1;
    let maxRow = matrix.length;
    let maxCol;
    // 上 右 下 左
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let pathLen = new Array(maxRow);
    let dfs = (aRow, aCol) => {
        let len = 1;

        if (pathLen[aRow][aCol] > 0) {
            return pathLen[aRow][aCol];
        }

        for (let i = 0; i < 4; i++) {
            let row = aRow + directions[i][0];
            let col = aCol + directions[i][1];

            if (row < 0 || row >= maxRow || col < 0 || col >= maxCol) {
                continue;
            }

            if (matrix[aRow][aCol] < matrix[row][col]) {
                len = Math.max(len, dfs(row, col) + 1);
            }
        }

        pathLen[aRow][aCol] = len;

        return len;
    };

    if (maxRow <= 0) {
        return 0;
    } else {
        maxCol = matrix[0].length;
    }

    for (let i = 0; i < maxRow; i++) {
        pathLen[i] = new Array(maxCol).fill(0);
    }

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }

    return res;
};
