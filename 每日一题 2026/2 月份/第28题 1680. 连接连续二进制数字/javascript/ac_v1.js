/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let res = 0;
    const MOD = 1e9 + 7;

    for (let i = 1; i <= n; i++) {
        let bits = 32 - Math.clz32(i) - 1;
        let mask = 1 << bits;

        while (mask) {
            res = ((res << 1) + ((i & mask) >>> bits)) % MOD;
            mask = mask >>> 1;
            bits--;
        }
    }

    return res;
};
