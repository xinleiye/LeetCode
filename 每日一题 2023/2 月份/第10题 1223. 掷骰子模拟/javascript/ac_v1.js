/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
    let res = 0;
    const MOD = 1e9 + 7;
    const dp = new Array(2).fill(0).map(() => {
        const buff = new Array(6);

        for (let j = 0; j < 6; j++) {
            buff[j] = new Array(15).fill(0);
        }

        return buff;
    });

    for (let i = 0; i < 6; i++) {
        dp[0][i][0] = 1;
    }
    for (let i = 1; i < n; i++) {
        const row = i & 1;

        for (let j = 0; j < 6; j++) {
            dp[row][j].fill(0);
        }
        for (let j = 0; j < 6; j++) {
            for (let k = 0; k < 6; k++) {
                const count = rollMax[k];

                for (let m = 0; m < count; m++) {
                    if (j !== k) {
                        dp[row][j][0] = (dp[row][j][0] + dp[row ^ 1][k][m]) % MOD;
                    } else {
                        dp[row][j][m + 1] = (dp[row][j][m + 1] + dp[row ^ 1][j][m]) % MOD;
                    }
                }
            }
        }
    }
    for (let i = 0; i < 6; i++) {
        const count = rollMax[i];
        const row = n % 2 ? 0 : 1;

        for (let j = 0; j < count; j++) {
            res = (res + dp[row][i][j]) % MOD;
        }
    }

    return res;
};
