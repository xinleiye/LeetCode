/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    const memo = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

    memo[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            memo[i] = Math.min(memo[i], Math.max(j - 1, memo[i - j]) + 1);
        }
    }

    return memo[n];
};
