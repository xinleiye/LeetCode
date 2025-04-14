/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    return Number(quickMul(5n, BigInt(Math.ceil(n / 2))) * quickMul(4n, BigInt(Math.floor(n / 2))) % BigInt(1e9 + 7));
};

function quickMul(base, exponent) {
    let res = 1n;
    let x = BigInt(base);
    let y = BigInt(exponent);
    const MOD = BigInt(1e9 + 7);

    while (y > 0) {
        if (y % 2n === 1n) {
            res = (res * x) % MOD;
        }
        x = (x * x) % MOD;
        y = y / 2n;
    }

    return res;
}
