/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    const nexts = new Array(n).fill().map(_ => []);
    for (let i = 0; i < n - 1; i++) {
        nexts[i].push(i + 1);
    }

    let res = [];
    for (const [s, e] of queries) {
        nexts[s].push(e);
        res.push(bfsSearch(n, nexts));
    }

    return res;
};

function bfsSearch(total, nexts) {
    const dists = new Array(total).fill(-1);
    const stack = [0];

    dists[0] = 0;
    while (stack.length) {
        let cur = stack.shift();
        const next = nexts[cur];

        for (let n of next) {
            if (dists[n] >= 0) {
                continue;
            }
            stack.push(n);
            dists[n] = dists[cur] + 1;
        }
    }

    return dists[total - 1];
}
