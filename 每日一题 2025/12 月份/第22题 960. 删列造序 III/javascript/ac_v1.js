/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const col = strs[0].length;
    const dp = new Array(col).fill(1);

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < i; j++) {
            let valid = true;

            for (const str of strs) {
                if (str[i] < str[j]) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return col - Math.max(...dp);
};
