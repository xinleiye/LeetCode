/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let res = [];
    let fromSet = new Set();
    let toSet = new Set();

    edges.forEach(edge => {
        if (!toSet.has(edge[0])) {
            fromSet.add(edge[0]);
        } else {
            fromSet.delete(edge[0]);
        }
        toSet.add(edge[1]);
    });

    fromSet.forEach((val, key) => {
        if (!toSet.has(key)) {
            res.push(key);
        }
    })
    
    return res;
};
