/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    const total = values.length;
    const memo = Array.from({ length: total }, () => new Array(total).fill(-1));
    const dfsSearch = (i, j) => {
        if (i + 2 > j) {
            return 0;
        }
        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        let res = Infinity;
        for (let k = i + 1; k < j; k++) {
            res = Math.min(res, values[i] * values[k] * values[j] + dfsSearch(i, k) + dfsSearch(k, j));
        }
        memo[i][j] = res;

        return res;
    };

    return dfsSearch(0, total - 1);
};
