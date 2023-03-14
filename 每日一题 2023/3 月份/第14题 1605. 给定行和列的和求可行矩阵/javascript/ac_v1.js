/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const maxRow = rowSum.length;
    const maxCol = colSum.length;
    let row = 0;
    let col = 0;
    const res = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(0));

    while (row < maxRow && col < maxCol) {
        const rs = rowSum[row];
        const cs = colSum[col];

        if (rs < cs) {
            res[row][col] = rs;
            colSum[col] -= rs;
            row++;
        } else {
            res[row][col] = cs;
            rowSum[row] -= cs;
            col++;
        }
    }

    return res;
};
