/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    let res = 0;
    const total = nums.length;
    const dp = new Array(total).fill(0).map(() => new Array(k + 1).fill(0));

    for (let i = 0; i < total; i++) {
        dp[i][0] = 1;
        for (let j = 0; j <= k; j++) {
            for (let m = 0; m < i; m++) {
                if (nums[i] !== nums[m]) {
                    if (j > 0) {
                        dp[i][j] = Math.max(dp[i][j], dp[m][j - 1] + 1);
                    }
                } else {
                    dp[i][j] = Math.max(dp[i][j], dp[m][j] + 1);
                }
            }
            res = Math.max(res, dp[i][j]);
        }
    }

    return res;
};
