/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const graph = new Array(n).fill(0).map(_ => []);
    for (const [s, e] of edges) {
        graph[s].push(e);
        graph[e].push(s);
    }

    let res = 0;
    let dfsSearch = (node, pre) => {
        let sum = values[node];
        const nexts = graph[node];

        for (const next of nexts) {
            if (next !== pre) {
                sum += dfsSearch(next, node);
            }
        }
        res += sum % k === 0 ? 1 : 0;

        return sum;
    };

    dfsSearch(0, -1);

    return res;
};
