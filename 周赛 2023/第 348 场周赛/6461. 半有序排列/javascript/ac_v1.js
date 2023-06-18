/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function(n, queries) {
    const querySet = [new Set(), new Set()];
    let res = 0;

    for (let i = queries.length - 1; i >= 0; i--) {
        const [type, index, val] = queries[i];

        if (!querySet[type].has(index)) {
            res += (n - querySet[type ^ 1].size) * val;
            querySet[type].add(index);
        }
    }

    return res;
};
