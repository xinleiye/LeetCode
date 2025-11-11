/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const total = strs.length;
    const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));

    for (let i = 0; i < total; i++) {
        const [zero, one] = parseStr(strs[i]);

        for (let j = m; j >= zero; j--) {
            for (let k = n; k >= one; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - zero][k - one] + 1);
            }
        }
    }

    return dp[m][n];
};

function parseStr(str) {
    let zero = 0;
    let one = 0;

    for (const ch of str) {
        if (ch === "0") {
            zero++;
        } else {
            one++;
        }
    }

    return [zero, one];
}
