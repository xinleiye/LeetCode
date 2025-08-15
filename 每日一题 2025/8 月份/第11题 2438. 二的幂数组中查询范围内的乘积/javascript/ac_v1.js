/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const powers = [];
    let pow = 0;
    while (n) {
        if (n & 1) {
            powers.push(Math.pow(2, pow));
        }
        n = n >>> 1;
        pow++;
    }

    const res = [];
    const MOD = 1e9 + 7;
    for (const [l, r] of queries) {
        let num = 1;
        for (let i = l; i <= r; i++) {
            num = (num * powers[i]) % MOD;
        }
        res.push(num);
    }

    return res;
};
