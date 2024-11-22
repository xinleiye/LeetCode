/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function(edges) {
    const graph = new Map();
    for (const [s, e] of edges) {
        add2Map(graph, s, e);
        add2Map(graph, e, s);
    }

    let res = 0;
    const dfsSearch = (map, cur, pre) => {
        const next = map.get(cur);
        let totalCount = 0;
        let count = -1;
        let valid = true;
        for (const n of next) {
            if (n === pre) {
                continue;
            }
            const c = dfsSearch(map, n, cur);
            if (count === -1) {
                count = c;
            } else if (count !== c) {
                valid = false;
            }
            totalCount += c;
        }
        res += valid ? 1 : 0;

        return totalCount + 1;
    };

    dfsSearch(graph, 0, -1);

    return res;
};

function add2Map(map, node1, node2) {
    if (map.has(node1)) {
        map.get(node1).push(node2);
    } else {
        map.set(node1, [node2]);
    }
}
