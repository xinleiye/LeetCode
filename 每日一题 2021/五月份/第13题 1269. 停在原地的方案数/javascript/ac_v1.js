/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
 var numWays = function(steps, arrLen) {
    let mod = 1000000007;
    let res = new Array(steps + 1);

    arrLen = Math.min(steps + 1, arrLen);
    for (let i = 0; i <= steps; i++) {
        res[i] = (new Array(arrLen)).fill(0);
    }

    res[0][0] = 1;
    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j < arrLen; j++) {
            res[i][j] = res[i - 1][j];
            if (j > 0) {
                res[i][j] = (res[i][j] + res[i - 1][j - 1]) % mod;
            }
            if (j < arrLen - 1) {
                res[i][j] = (res[i][j] + res[i - 1][j + 1]) % mod;
            }
        }
    }

    return res[steps][0];
};
