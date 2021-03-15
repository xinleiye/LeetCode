/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    let res = 0;
    const edgeMap = new Map();

    edges.forEach(edge => {
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

    edgeMap.forEach((val, key) => {
        if (val.length === edgeMap.size - 1) {
            res = key;
        }
    });

    return res;
};
