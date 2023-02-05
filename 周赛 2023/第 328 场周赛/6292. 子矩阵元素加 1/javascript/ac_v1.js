/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const mat = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (const [s1, e1, s2, e2] of queries) {
        for (let i = s1; i <= s2; i++) {
            mat[i][e1]++;
            if (e2 + 1 < n) {
                mat[i][e2 + 1]--;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            mat[i][j] += mat[i][j - 1];
        }
    }

    return mat
};
