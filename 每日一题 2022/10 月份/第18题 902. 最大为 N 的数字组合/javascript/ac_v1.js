/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
    const nString = n.toString();
    const length = nString.length;
    const total = digits.length;
    const dp = new Array(length + 1).fill(0).map(() => new Array(2).fill(0));

    dp[0][1] = 1;
    for (let i = 1; i <= length; i++) {
        for (let j = 0; j < total; j++) {
            if (nString[i - 1] === digits[j]) {
                dp[i][1] = dp[i - 1][1];
            } else if (nString[i - 1] > digits[j]) {
                dp[i][0] += dp[i - 1][1];
            } else {
                break;
            }
        }
        if (i > 1) {
            dp[i][0] += total + dp[i - 1][0] * total;
        }
    }

    return dp[length][0] + dp[length][1];
};
