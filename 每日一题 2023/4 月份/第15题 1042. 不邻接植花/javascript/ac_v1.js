/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
    const gardenMap = new Map();
    for (const [s, e] of paths) {
        if (gardenMap.has(s)) {
            gardenMap.get(s).push(e);
        } else {
            gardenMap.set(s, [e]);
        }
        if (gardenMap.has(e)) {
            gardenMap.get(e).push(s);
        } else {
            gardenMap.set(e, [s]);
        }
    }

    const res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (res[i] === 0) {
            const next = gardenMap.get(i + 1) || [];
            let flowers = 0;
            for (const n of next) {
                if (res[n - 1]) {
                    flowers |= 1 << (res[n - 1] - 1);
                }
            }

            let cur = 1;
            while (flowers) {
                if (flowers & 1) {
                    cur++;
                    flowers = flowers >>> 1;
                } else {
                    break;
                }
            }
            res[i] = cur;
        }
    }

    return res;
};
