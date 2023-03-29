/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const dp = new Array(5).fill(0).map(() => new Array(n).fill(0));
    let res = 0;

    for (let i = 0; i < 5; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k <= j; k++) {
                dp[j][i] += dp[k][i - 1];
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        res += dp[i][n - 1];
    }

    return res;
};
