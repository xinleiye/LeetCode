/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const MOD = 1e9 + 7;
    const buff = new Array(2).fill(0).map(() => new Array(k + 1).fill(0));

    buff[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= k; j++) {
            const cur = i & 1;
            const prev = cur ^ 1;

            buff[cur][j] = (j - 1 >= 0 ? buff[cur][j - 1] : 0) - (j - i >= 0 ? buff[prev][j - i] : 0) + buff[prev][j];
            if (buff[cur][j] >= MOD) {
                buff[cur][j] -= MOD;
            } else if (buff[cur][j] < 0) {
                buff[cur][j] += MOD;
            }
        }
    }

    return buff[n & 1][k];
};
