/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let res = 0;
    const queens = [];
    const cols = new Array(n).fill(false);
    const diag1 = new Array(n * 2 - 1).fill(false);
    const diag2 = new Array(n * 2 - 1).fill(false);
    const dfsSearch = (row) =>  {
        if (row === n) {
            res++;

            return;
        }
        for (let col = 0; col < n; col++) {
            const rc = row - col + n - 1;

            if (!cols[col] && !diag1[row + col] && !diag2[rc]) {
                queens.push([row, col]);
                cols[col] = true;
                diag1[row + col] = true;
                diag2[rc] = true;
                dfsSearch(row + 1);
                queens.pop([row, col]);
                cols[col] = false;
                diag1[row + col] = false;
                diag2[rc] = false;
            }
        }
    }

    dfsSearch(0);

    return res;
};
