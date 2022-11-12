/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7;
    const res = new Array(n + 1).fill(0);

    res[0] = 1;
    res[1] = 1;
    res[2] = 2;
    // 可以优化为: res[i] = (2 * res[i - 1] + res[i - 3]) % MOD;
    res[3] = 5;
    for (let i = 4; i <= n; i++) {
        res[i] = (res[i - 1] + res[i - 2]) % MOD;

        let pos = i - 3;
        let count = 0;
        while (pos >= 0) {
            count = (count + res[pos]) % MOD;
            pos -= 2;
        }
        pos = i - 4;
        while (pos >= 0) {
            count = (count + res[pos]) % MOD;
            pos -= 2;
        }
        res[i] = (res[i] + count * 2) % MOD;
    }

    return res[n];
};
