/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    let res = 0;
    const road = new Array(n).fill(0).map(() => new Set());

    for (const [s, e] of roads) {
        road[s].add(e);
        road[e].add(s);
    }
    for (let i = 0; i < n; i++) {
        const c1 = road[i];

        for (let j = i + 1; j < n; j++) {
            res = Math.max(res, c1.size + road[j].size - (c1.has(j) ? 1 : 0));
        }
    }

    return res;
};
