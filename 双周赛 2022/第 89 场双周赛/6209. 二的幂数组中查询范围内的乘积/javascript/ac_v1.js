/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const powers = [];
    let bit = 0;
    while (n) {
        if (n & 1) {
            powers.push(Math.pow(2, bit));
        }
        bit++;
        n = n >>> 1;
    }

    const MOD = 1e9 + 7;
    const res = [];
    for (const [left, right] of queries) {
        let multi = 1;
        for (let i = left; i <= right; i++) {
            multi = (multi * powers[i]) % MOD;
        }
        res.push(multi);
    }

    return res;
};
