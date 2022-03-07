/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const res = new Array(n);
    const visited = new Array(n).fill(false);
    const graphMap = new Map();
    const dfsSearch = (node, ansestor, graph) => {
        if (visited[node]) {
            res[node].forEach(a => {
                ansestor.add(a);
            });
            return;
        }
        if (graph.has(node)) {
            graph.get(node).forEach(a => {
                ansestor.add(a);
                dfsSearch(a, ansestor, graph);
            });
        }
    }
    edges.forEach(e => {
        if (graphMap.has(e[1])) {
            graphMap.get(e[1]).push(e[0]);
        } else {
            graphMap.set(e[1], [e[0]]);
        }
    });

    for (let i = 0; i < n; i++) {
        const ancestorSet = new Set();
        
        dfsSearch(i, ancestorSet, graphMap);
        res[i] = [...ancestorSet].sort((a1, a2) => a1 - a2);
        visited[i] = true;
    }
    
    return res;
};
