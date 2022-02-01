/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
    const graph = new Array(n + 1).fill(0).map(() => new Array());
    edges.forEach(edge => {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    });

    const path = new Array(n + 1).fill(0).map(() => new Array(2).fill(Number.MAX_SAFE_INTEGER));
    const queue = [];
    path[1][0] = 0;
    queue.push([1, 0]);
    while (path[n][1] === Number.MAX_SAFE_INTEGER) {
        let [cur, len] = queue.shift();

        len++;
        for (let next of graph[cur]) {
            if (len < path[next][0]) {
                path[next][0] = len;
                queue.push([next, len]);
            } else if (len > path[next][0] && len < path[next][1]) {
                path[next][1] = len;
                queue.push([next, len]);
            }
        }
    }

    let res = 0;
    for (let i = 0, len = path[n][1]; i < len; i++) {
        if (res % (2 * change) >= change) {
            res += 2 * change - res % (2 * change);
        }
        res += time;
    }

    return res;
};
