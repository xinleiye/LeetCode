/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    const res = new Array(m);

    if (original.length !== m * n) {
        return []
    }
    for (let i = 0; i < m; i++) {
        res[i] = new Array(n);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[j][i] = original[i + j * n];
        }
    }

    return res;
};
