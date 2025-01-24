/**
 * @param {number[][]} edges
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var maximumPoints = function(edges, coins, k) {
    const total = coins.length;
    const memo = new Array(total).fill(0).map(_ => new Array(14).fill(-1));
    const map = new Map();

    for (const [s, e] of edges) {
        if (map.has(s)) {
            map.get(s).push(e);
        } else {
            map.set(s, [e]);
        }
        if (map.has(e)) {
            map.get(e).push(s);
        } else {
            map.set(e, [s]);
        }
    }

    return dfsSearch(-1, 0, 0, memo, map, k, coins);
};

function dfsSearch(pre, cur, shift, cache, map, diff, coins) {
    if (cache[cur][shift] !== -1) {
        return cache[cur][shift];
    }

    let v1 = (coins[cur] >> shift) - diff;
    let v2 = coins[cur] >> (shift + 1);
    const next = map.get(cur) || [];

    for (const n of next) {
        if (n === pre) {
            continue;
        }
        v1 += dfsSearch(cur, n, shift, cache, map, diff, coins);
        if (shift < 13) {
            v2 += dfsSearch(cur, n, shift + 1, cache, map, diff, coins);
        }
    }
    cache[cur][shift] = Math.max(v1, v2);

    return cache[cur][shift];
}
