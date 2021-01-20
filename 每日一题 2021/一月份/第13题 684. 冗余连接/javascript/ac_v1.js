/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const res = [0, 0];
    const edgeMap = new Map();
    const edgeIndexMap = new Map();
    const visited = new Array(edges.length + 1).fill(false);
    const path = [];
    let repeat = -1;
    let index = -1;
    const getCircleDfs = (cur, pre) => {
        visited[cur] = true;
        if (repeat !== -1) {
            return;
        }
        path.push(cur);

        if (edgeMap.has(cur)) {
            const nexts = edgeMap.get(cur);

            for (let i = 0, len = nexts.length; i < len; i++) {
                const next = nexts[i];

                if (!visited[next]) {
                    getCircleDfs(next, cur);
                } else {
                    const index = path.indexOf(next);

                    if (next !== pre && index >= 0) {
                        repeat = index;
                        path.push(next);
                    }
                }
                if (repeat !== -1) {
                    return;
                }
            }
        }
        path.pop(cur);
    };
    const getEdgeIndex = (n1, n2) => {
        return n1 > n2 ? edgeIndexMap.get(`${n2}#${n1}`) : edgeIndexMap.get(`${n1}#${n2}`);
    };
    edges.forEach((edge, index) => {
        edgeIndexMap.set(`${edge[0]}#${edge[1]}`, index);
        if (edgeMap.has(edge[0])) {
            edgeMap.get(edge[0]).push(edge[1]);
        } else {
            edgeMap.set(edge[0], [edge[1]]);
        }
        if (edgeMap.has(edge[1])) {
            edgeMap.get(edge[1]).push(edge[0]);
        } else {
            edgeMap.set(edge[1], [edge[0]]);
        }
    });

    getCircleDfs(1, -1);

    for (let i = repeat, len = path.length - 1; i < len; i++) {
        let pos = getEdgeIndex(path[i], path[i + 1]);

        if (pos > index) {
            index = pos;
            res[0] = Math.min(path[i], path[i + 1]);
            res[1] = Math.max(path[i], path[i + 1]);
        }
    }

    return res;
};
