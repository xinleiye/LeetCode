/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    const graphMap = new Map();
    const add2Map = (map, src, tar) => {
        if (map.has(src)) {
            map.get(src).push(tar);
        } else {
            map.set(src, [tar]);
        }
    };
    for (const [s, t] of roads) {
        add2Map(graphMap, s, t);
        add2Map(graphMap, t, s);
    }

    let res = 0;
    const dfsSearch = (node, parent) => {
        let count = 1;
        const next = graphMap.get(node) || [];
        for (const n of next) {
            if (n !== parent) {
                count += dfsSearch(n, node);
            }
        }
        if (node > 0) {
            res += Math.ceil(count / seats);
        }

        return count;
    };
    dfsSearch(0, -1);

    return res;
};
