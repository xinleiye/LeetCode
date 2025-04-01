/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    let res = -1;
    const total = edges.length;
    const visited = new Array(total).fill(false);
    const dfsSearch = (node, map, time) => {
        visited[node] = true;
        map.set(node, time);

        const next = edges[node];
        if (next !== -1) {
            if (visited[next]) {
                if (map.has(next)) {
                    res = Math.max(res, time - map.get(next) + 1);
                }
                return;
            }
            dfsSearch(next, map, time + 1);
        }
    };

    for (let i = 0; i < total; i++) {
        if (!visited[i]) {
            dfsSearch(i, new Map(), 0);
        }
    }

    return res;
};
