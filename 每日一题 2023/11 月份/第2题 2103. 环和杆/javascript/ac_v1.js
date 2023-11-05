/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const rods = new Array(10).fill(0).map(() => new Set());
    let pos = 0;
    const total = rings.length;
    let res = 0;

    while (pos < total) {
        rods[rings[pos + 1]].add(rings[pos]);
        pos += 2;
    }
    for (const r of rods) {
        if (r.size >= 3) {
            res++;
        }
    }

    return res;
};
