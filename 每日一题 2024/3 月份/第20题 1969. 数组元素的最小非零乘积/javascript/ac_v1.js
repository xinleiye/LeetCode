/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function(p) {
    if (p === 1) {
        return 1;
    }

    const MOD = BigInt(1e9 + 7);
    const x = fastPow(2n, BigInt(p), MOD) - 1n;
    const pow = 1n << BigInt(p - 1);

    return fastPow(x - 1n, pow - 1n, MOD) * x % MOD;
};

function fastPow(x, pow, mod) {
    let res = BigInt(1);

    while (pow > 0) {
        if (pow & 1n) {
            res = (res * x) % mod;
        }
        x = (x * x) % mod;
        pow = pow >> 1n;
    }

    return res;
}
