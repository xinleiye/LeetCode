/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const g = new Map();
    for (const [s, e] of edges) {
        if (s === e) {
            return -1;
        }
        if (!g.has(s)) {
            g.set(s, []);
        }
        g.get(s).push(e);
    }

    const total = colors.length;
    let res = 0;
    const memo = new Array(total);
    for (let i = 0; i < total; i++) {
        const m = dfsSearch(i, g, colors, memo);
        if (m.length === 0) {
            return -1;
        }
        res = Math.max(res, m[colors[i].charCodeAt(0) - 97]);
    }

    return res;
};

function dfsSearch(node, graph, colors, memo) {
    if (memo[node]) {
        return memo[node];
    }
    memo[node] = [];

    const count = new Array(26).fill(0);
    const next = graph.get(node) || [];
    for (const n of next) {
        const c = dfsSearch(n, graph, colors, memo);
        if (c.length === 0) {
            return c;
        }
        for (let i = 0; i < 26; i++) {
            count[i] = Math.max(count[i], c[i]);
        }
    }
    count[colors[node].charCodeAt(0) - 97]++;
    memo[node] = count;

    return count;
}