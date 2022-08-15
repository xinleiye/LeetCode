/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const edgeMap = new Map();
    const add2Map = (map, n1, n2) => {
        if (map.has(n1)) {
            map.get(n1).push(n2);
        } else {
            map.set(n1, [n2]);
        }
    };
    for (const [s, e] of edges) {
        add2Map(edgeMap, s, e);
        add2Map(edgeMap, e, s);
    }

    const restrictSet = new Set();
    for (const s of restricted) {
        restrictSet.add(s);
    }

    let res = 0;
    const stack = [0];
    const visited = new Array(n).fill(false);
    while (stack.length) {
        const cur = stack.shift();
        const next = edgeMap.get(cur);

        res++;
        visited[cur] = true
        if (next) {
            for (const n of next) {
                if (!visited[n] && !restrictSet.has(n)) {
                    stack.push(n);
                }
            }
        }
    }

    return res;
};
