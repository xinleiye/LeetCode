/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
    const yMap = new Map();
    for (const [x, y] of points) {
        if (yMap.has(y)) {
            yMap.set(y, yMap.get(y) + 1);
        } else {
            yMap.set(y, 1);
        }
    }

    let res = 0n
    const MOD = BigInt(1e9 + 7);
    let total = 0n;
    for (const value of yMap.values()) {
        if (value > 1) {
            const v = BigInt(value);
            const count = v * (v - 1n) / 2n;

            res = (res + count * total) % MOD;
            total += count;
        }
    }

    return Number(res);
};
