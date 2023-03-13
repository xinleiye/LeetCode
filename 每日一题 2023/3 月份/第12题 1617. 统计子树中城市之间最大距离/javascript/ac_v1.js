/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function(n, edges) {
    const cityMap = new Array(n).fill(0).map(() => []);
    for (const [s, e] of edges) {
        cityMap[s - 1].push(e - 1);
        cityMap[e - 1].push(s - 1);
    }

    const res = new Array(n - 1).fill(0);
    const total = 1 << n;
    for (let i = 1; i < total; i++) {
        let mask = i;
        let dis = 0;
        const dfsSearch = (root, map) => {
            let first = 0;
            let second = 0;
            const next = map[root];
            mask &= ~(1 << root);
            for (const n of next) {
                if (mask & (1 << n)) {
                    mask &= ~(1 << n);

                    const d = dfsSearch(n, map) + 1;
                    if (d > first) {
                        second = first;
                        first = d;
                    } else if (d > second) {
                        second = d;
                    }
                }
            }
            dis = Math.max(dis, first + second);

            return first;
        };
        dfsSearch(getRoot(mask), cityMap);
        if (mask === 0 && dis > 0) {
            res[dis - 1]++;
        }
    }

    return res;
};

function getRoot (mask) {
    let root = 0;

    while ((mask & 1) === 0) {
        root++;
        mask = mask >>> 1;
    }

    return root;
}
