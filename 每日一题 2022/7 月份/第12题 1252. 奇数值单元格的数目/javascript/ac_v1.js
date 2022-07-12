/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    for (const [row, col] of indices) {
        rows[row]++;
        cols[col]++;
    }

    let oddRow = 0;
    let oddCol = 0;
    for (const r of rows) {
        if (r & 1) {
            oddRow++;
        }
    }
    for (const c of cols) {
        if (c & 1) {
            oddCol++;
        }
    }

    return oddRow * (n - oddCol) +  oddCol * (m - oddRow);
};
