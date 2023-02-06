/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function(n) {
    const MOD = BigInt(1e9 + 7);
    let res = 1n;
    let base = 2n;

    while (n) {
        if (n % 2 === 1) {
            res = (res * base) % MOD;
        }
        base = (base * base) % MOD;
        n = Math.floor(n / 2);
    }

    return (res - 2n + MOD) % MOD;
};
