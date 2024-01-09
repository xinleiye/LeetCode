/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const sLen = s.length;
    const dp = new Array(sLen + 1).fill(1e9);
    const dictSet = new Set();

    for (const d of dictionary) {
        dictSet.add(d);
    }
    dp[0] = 0;
    for (let i = 1; i <= sLen; i++) {
        const curStr = s.substring(0, i);

        dp[i] = dp[i - 1] + 1;
        for (const w of dictionary) {
            if (curStr.endsWith(w)) {
                dp[i] = Math.min(dp[i], dp[i - w.length]);
            }
        }
    }

    return dp[sLen];
};
