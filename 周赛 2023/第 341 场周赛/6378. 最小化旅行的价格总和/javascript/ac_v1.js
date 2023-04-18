/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function(n, edges, price, trips) {
    const map = new Map();
    for (const [s, e] of edges) {
        if (map.has(s)) {
            map.get(s).push(e);
        } else {
            map.set(s, [e]);
        }
        if (map.has(e)) {
            map.get(e).push(s);
        } else {
            map.set(e, [s]);
        }
    }

    const dfsSearch = (children, parent, tar, map, nodePath) => {
        if (children === tar) {
            nodePath[children]++;

            return true;
        }

        const next = map.get(children);
        for (const n of next) {
            if (n !== parent) {
                if (dfsSearch(n, children, tar, map, nodePath)) {
                    nodePath[children]++;
                    return true;
                }
            }
        }

        return false;
    };
    const nodeCount = new Array(n).fill(0);
    for (const [s, e] of trips) {
        dfsSearch(s, -1, e, map, nodeCount);
    }

    const dfsPrice = (node, parent, map, price, count) => {
        let noHalve = price[node] * count[node];
        let halve = noHalve / 2;
        const next = map.get(node) || [];

        for (const n of next) {
            if (n !== parent) {
                const cost = dfsPrice(n, node, map, price, count);

                noHalve += Math.min(cost[0], cost[1]);
                halve += cost[0];
            }
        }

        return [noHalve, halve];
    };

    return Math.min(...dfsPrice(0, -1, map, price, nodeCount));
};
