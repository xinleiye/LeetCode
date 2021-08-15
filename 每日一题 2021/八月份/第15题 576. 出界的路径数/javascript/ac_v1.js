/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let res = 0;
    const mod = 1e9 + 7;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const buff = new Array(maxMove + 1);

    for (let i = 0; i <= maxMove; i++) {
        buff[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            buff[i][j] = new Array(n).fill(0);
        }
    }
    buff[0][startRow][startColumn] = 1;
    for (let i = 0; i < maxMove; i++) {
        for (let row = 0; row < m; row++) {
            for (let col = 0; col < n; col++) {
                const step = buff[i][row][col];

                if (step > 0) {
                    for (const dir of directions) {
                        const aRow = row + dir[0];
                        const aCol = col + dir[1];

                        if (aRow >= 0 && aRow < m && aCol >= 0 && aCol < n) {
                            buff[i + 1][aRow][aCol] = (buff[i + 1][aRow][aCol] + step) % mod;
                        } else {
                            res = (res + step) % mod;
                        }
                    }
                }
            }
        }
    }

    return res;
};
