/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const res = new Array(n).fill(0).map(_ => new Array(n).fill(0));

    for (const [r1, c1, r2, c2] of queries) {
        for (let i = c1; i <= c2; i++) {
            res[r1][i]++;
            if (r2 + 1 < n) {
                res[r2 + 1][i]--;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            res[j][i] += res[j - 1][i];
        }
    }

    return res;
};
