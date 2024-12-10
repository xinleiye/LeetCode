/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    if (n === 1) {
        return 10;
    }

    const MOD = 1e9 + 7;
    const TYPE = 4;
    const count = new Array(n).fill(0).map(_ => new Array(TYPE));
    let res = 0;
    for (let i = 0; i < TYPE; i++) {
        count[0][i] = 1;
    }
    for (let i = 1; i < n; i++) {
        count[i][0] = (count[i - 1][1] + count[i - 1][2]) % MOD;
        count[i][1] = (2 * count[i - 1][0]) % MOD;
        count[i][2] = (2 * count[i - 1][0] + count[i - 1][3]) % MOD;
        count[i][3] = (2 * count[i - 1][2]) % MOD;
    }
    res = (res + count[n - 1][0] * 4) % MOD;
    res = (res + count[n - 1][1] * 2) % MOD;
    res = (res + count[n - 1][2] * 2) % MOD;
    res = (res + count[n - 1][3]) % MOD;

    return res;
};
