/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
    let res = 0;
    let mod = 1000000007;
    let rollRes = new Array(n);

    // 生成一个三维数组[n][6][17]，并初始化，感觉好蠢。
    for (let i = 0; i < n; i++) {
        rollRes[i] = (new Array(6)).fill(0);
        for (let j = 0; j < 6; j++) {
            rollRes[i][j] = (new Array(16)).fill(0);
            rollRes[0][j][1] = 1;
        }
    }
    // 第i次投掷
    for (let i = 1; i < n; i++) {
        // 第i次投掷可能的结果
        for (let j = 0; j < 6; j++) {
            // 第i - 1次投掷可能的结果
            for (let k = 0; k < 6; k++) {
                // i 次投掷结果与 i - 1 次一不相等时，意味着本次投掷的结果只出现 1 次
                // 以 j 结尾的序列总数 = i - 1 次投掷所有非 j 值，连续出现 1 到 rollMax 的序列的总和
                if (j !== k) {
                    for (let m = 1, len = rollMax[k]; m <= len; m++) {
                        rollRes[i][j][1] = (rollRes[i][j][1] + rollRes[i - 1][k][m]) % mod;
                    }
                // i 次投掷结果与 i - 1 次相等时
                // 连续出现 m + 1 次的序列总数 = i - 1 次投掷时，连续出现 m 次的序列的和
                } else {
                    for (let m = 1, len = rollMax[k]; m < len; m++) {
                        rollRes[i][j][m + 1] = (rollRes[i][j][m + 1] + rollRes[i - 1][k][m]) % mod;
                    }
                }
            }
        }
    }

    for (let i = 0; i < 6; i++) {
        for (let j = 1, len = rollMax[i]; j <= len; j++) {
            res = (res + rollRes[n - 1][i][j]) % mod;
        }
    }

    return res;
};
