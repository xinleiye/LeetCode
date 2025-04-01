/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const total = questions.length;
    const dp = new Array(total + 1).fill(0);

    for (let i = total - 1; i >= 0; i--) {
        dp[i] = Math.max(dp[i + 1], dp[Math.min(total, i + questions[i][1] + 1)] + questions[i][0]);
    }

    return dp[0];
};
