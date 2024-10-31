/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const total = edges.length;
    const map = new Array(total + 1).fill(0).map((_, index) => index);

    for (let i = 0; i < total; i++) {
        const [node1, node2] = edges[i];

        if (find(map, node1) !== find(map, node2)) {
            union(map, node1, node2);
        } else {
            return [node1, node2];
        }
    }
};

function find(map, node) {
    if (map[node] !== node) {
        map[node] = find(map, map[node]);
    }

    return map[node];
}

function union(map, node1, node2) {
    map[find(map, node1)] = find(map, node2);
}
