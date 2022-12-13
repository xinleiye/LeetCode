/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function(vals, edges, k) {
    if (k === 0 || edges.length === 0) {
        return _.max(vals);
    }

    const graph = new Array(vals.length).fill(0).map(() => []);
    for (const [s, e] of edges) {
        graph[s].push(e);
        graph[e].push(s);
    }

    let res = Number.MIN_SAFE_INTEGER;
    graph.forEach((nodes, key) => {
        const val = [];
        for (const n of nodes) {
            val.push(vals[n]);
        }
        val.sort((v1, v2) => v2 - v1);

        let sum = vals[key];
        res = Math.max(res, sum);

        const len = Math.min(k, val.length);
        for (let i = 0; i < len; i++) {
            sum += val[i];
            res = Math.max(res, sum);
        }
    });

    return res;
};
