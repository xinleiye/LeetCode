/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    const res = [];
    const path = new Array(n).fill(0).map((_, i) => i + 1);
    let dist = n - 1;

    for (const [s, e] of queries) {
        let t = path[s];

        path[s] = e;
        while (t !== -1 && t < e) {
            const next = path[t];

            path[t] = -1;
            t = next;
            dist--;
        }
        res.push(dist);
    }

    return res;
};
