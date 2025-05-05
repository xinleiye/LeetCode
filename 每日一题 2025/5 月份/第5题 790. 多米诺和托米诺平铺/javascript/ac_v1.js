/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7;
    const res = new Array(n + 1).fill(0).map(_ => new Array(4).fill(0));

    res[0][3] = 1;
    for (let i = 1; i <= n; i++) {
        res[i][0] = res[i - 1][3];
        res[i][1] = (res[i - 1][0] + res[i - 1][2]) % MOD;
        res[i][2] = (res[i - 1][0] + res[i - 1][1]) % MOD;
        res[i][3] = (res[i - 1][0] + res[i - 1][1] + res[i - 1][2] + res[i - 1][3]) % MOD;
    }

    return res[n][3];
};
