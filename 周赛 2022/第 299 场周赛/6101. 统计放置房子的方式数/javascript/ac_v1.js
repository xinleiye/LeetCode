/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
    let p1 = 2n;
    let p2 = 3n;
    const MOD = BigInt(1e9 +7);

    if (n === 1) {
        return 4;
    }
    for (let i = 3; i <= n; i++) {
        const cur = (p1 + p2) % MOD;

        p1 = p2;
        p2 = cur;
    }

    return (p2 * p2) % MOD;
};
