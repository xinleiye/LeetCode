/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    const dp = new Array(k + 1).fill(-1);

    dp[0] = 0;
    for (const pile of piles) {
        for (let i = k; i > 0; i--) {
            let val = 0;
            const total = pile.length;

            for (let j = 1; j <= total; j++) {
                val += pile[j - 1];
                if (i >= j && dp[i - j] !== -1) {
                    dp[i] = Math.max(dp[i], dp[i - j] + val);
                }
            }
        }
    }

    return dp[k];
};
