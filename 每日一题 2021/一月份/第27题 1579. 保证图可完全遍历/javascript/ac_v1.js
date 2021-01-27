/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    let aliceEdge = new Map();
    let bobEdge = new Map();
    let commonEdge = new Map();
    let nodesNums = 0;
    let commonPath = 0;
    let visited = new Array(n);
    let addEdge = (edgeMap, edge) => {
        if (edgeMap.has(edge[1])) {
            edgeMap.get(edge[1]).push(edge[2]);
        } else {
            edgeMap.set(edge[1], [edge[2]]);
        }
        if (edgeMap.has(edge[2])) {
            edgeMap.get(edge[2]).push(edge[1]);
        } else {
            edgeMap.set(edge[2], [edge[1]]);
        }
    };
    let dfs = (node, pathType) => {
        let next;

        if (visited[node]) {
            return;
        }

        visited[node] = true;
        nodesNums++;
        next = commonEdge.get(node);
        if (next) {
            next.forEach(val => {
                if (!visited[val]) {
                    dfs(val, pathType);
                }
            });
        }

        if (pathType === 1) {
            next = aliceEdge.get(node);
        } else if (pathType === 2) {
            next = bobEdge.get(node);
        }
        if (next) {
            next.forEach(val => {
                if (!visited[val]) {
                    dfs(val, pathType);
                }
            });
        }
    };

    edges.forEach(edge => {
        switch (edge[0]) {
            case 1:
                addEdge(aliceEdge, edge);
                break;
            case 2:
                addEdge(bobEdge, edge);
                break;
            case 3:
                addEdge(commonEdge, edge);
                break;
            default:
                break;
        }
    });

    visited.fill(false);
    nodesNums = 0;
    dfs(1, 1);
    if (nodesNums < n) {
        return -1;
    }

    visited.fill(false);
    nodesNums = 0;
    dfs(1, 2);
    if (nodesNums < n) {
        return -1;
    }

    visited.fill(false);
    commonPath = 0;
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            nodesNums = 0;
            dfs(i, 3);
            commonPath += nodesNums - 1;
        }
    }

    return edges.length - (n - 1) * 2 + commonPath;
};
