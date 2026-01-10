/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const length1 = s1.length;
    const length2 = s2.length;
    // dp[i][j]: s1 以 i 结尾，s2 以 j 结尾时，s1 与 s2 相同需要删除的最小字符和
    const dp = Array.from({ length: length1 + 1 }, _ => new Array(length2 + 1).fill(0));

    // s2 为空，删除 s1
    for (let i = 0; i < length1; i++) {
        dp[i + 1][0] = dp[i][0] + s1.charCodeAt(i);
    }
    // s1 为空，删除 s2
    for (let i = 0; i < length2; i++) {
        dp[0][i + 1] = dp[0][i] + s2.charCodeAt(i);
    }
    for (let i = 0; i < length1; i++) {
        const c1 = s1.charCodeAt(i);

        for (let j = 0; j < length2; j++) {
            if (s1[i] === s2[j]) {
                dp[i + 1][j + 1] = dp[i][j];
            } else {
                dp[i + 1][j + 1] = Math.min(dp[i][j + 1] + c1, dp[i + 1][j] + s2.charCodeAt(j));
            }
        }
    }

    return dp[length1][length2];
};
