/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const move = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]];
    const invalidPos = (r, c) => r < 0 || r >= n || c < 0 || c >= n;
    const memo = new Array(n);
    const dfsSearch = (r, c, step) => {
        if (invalidPos(r, c)) {
            return 0;
        }
        if (step === k) {
            return 1;
        }
        if (memo[r][c][step] !== -1) {
            return memo[r][c][step]
        }

        let res = 0;
        for (const [dr, dc] of move) {
            res += (dfsSearch(r + dr, c + dc, step + 1) / 8);
        }
        memo[r][c][step] = res;

        return res;
    };

    for (let i = 0; i < n; i++) {
        memo[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            memo[i][j] = new Array(k + 1).fill(-1);
        }
    }

    return dfsSearch(row, column, 0);
};
