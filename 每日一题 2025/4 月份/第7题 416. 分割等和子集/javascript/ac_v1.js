/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const total = nums.length;
    if (total <= 1) {
        return false;
    }

    let max = nums[0];
    let sum = 0;
    for (const n of nums) {
        max = Math.max(max, n);
        sum += n;
    }
    if (sum % 2) {
        return false;
    }

    const target = sum / 2;
    if (max > target) {
        return false;
    }

    // 前 i 个数中是否有和为 j 的组合
    const dp = new Array(total).fill(0).map(_ => new Array(target + 1).fill(false));
    for (let i = 0; i < total; i++) {
        dp[i][0] = true;
    }
    dp[0][nums[0]] = true;
    for (let i = 1; i < total; i++) {
        const cur = nums[i];
        for (let j = 1; j <= target; j++) {
            if (j > cur) {
                dp[i][j] = dp[i - 1][j] | dp[i - 1][j - cur];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[total - 1][target];
};
