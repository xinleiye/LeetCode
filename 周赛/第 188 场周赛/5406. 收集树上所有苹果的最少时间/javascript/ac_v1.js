/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let treeMap = new Map();
    let getApple = (node) => {
        let ret = 0;
        let nodes;

        if (!treeMap.has(node)) {
            return 0;
        }

        nodes = treeMap.get(node);
        for (let i = 0; i < nodes.length; i++) {
            let time = getApple(nodes[i]);
            
            if (time === 0) {
                if (hasApple[nodes[i]]) {
                    ret += 2;
                }
            } else {
                ret += time + 2;
            }
        }

        return ret;
    };

    edges.forEach((edge) => {
        if (treeMap.has(edge[0])) {
            treeMap.get(edge[0]).push(edge[1]);
        } else {
            treeMap.set(edge[0], [edge[1]]);
        }
    });

    return getApple(0);
};
