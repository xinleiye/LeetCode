/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function(nums, x) {
    const total = nums.length;
    const dp = [-Infinity, -Infinity];
    let res = nums[0];

    dp[nums[0] % 2] = nums[0];
    for (let i = 1; i < total; i++) {
        const rest = nums[i] % 2;
        const cur = Math.max(dp[rest] + nums[i], dp[1 - rest] + nums[i] - x);

        res = Math.max(res, cur);
        dp[rest] = Math.max(dp[rest], cur);
    }

    return res;
};
