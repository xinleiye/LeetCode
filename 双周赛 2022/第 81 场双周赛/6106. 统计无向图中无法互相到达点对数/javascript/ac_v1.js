/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    const edgeMap = new Map();
    for (const [s, e] of edges) {
        if (edgeMap.has(s)) {
            edgeMap.get(s).push(e);
        } else {
            edgeMap.set(s, [e]);
        }
        if (edgeMap.has(e)) {
            edgeMap.get(e).push(s);
        } else {
            edgeMap.set(e, [s]);
        }
    }

    const visited = new Array(n).fill(false);
    const bfsSearch = (graph, start, buff) => {
        let stack = [start];

        while (stack.length) {
            const node = stack.shift();
            const nexts = graph.get(node);

            buff.push(node);
            if (nexts) {
                for (const n of nexts) {
                    if (!visited[n]) {
                        visited[n] = true;
                        stack.push(n);
                    }
                }
            }
        }
    };
    const groups = [];
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const group = [];

            visited[i] = true;
            bfsSearch(edgeMap, i, group);
            groups.push(group.length);
        }
    }

    let res = 0;
    const preSum = new Array(groups.length);
    const groupCount = groups.length;
    preSum[0] = groups[0];
    for (let i = 1; i < groupCount; i++) {
        preSum[i] = preSum[i - 1] + groups[i];
    }
    for (let i = 0; i < groupCount; i++) {
        res += (preSum[groupCount - 1] - preSum[i]) * groups[i];
    }
    return res;
};
