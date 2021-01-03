/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let dp = [0, 0, 0];

    for (let i = 0; i < nums.length; ++i) {
        let mod = nums[i] % 3;
        // 与 nums[i] 相加 mod 3 为 0
        // 若 nums[i] mod 3 为 0，则 a 为前一次和 mod 3 为 0 的值，即dp[0]
        // 若 nums[i] mod 3 为 1，则 a 为前一次和 mod 3 为 2 的值，即dp[2]
        // 若 nums[i] mod 3 为 2，则 a 为前一次和 mod 3 为 1 的值，即dp[1]
        // b，c 以此类推
        let a = dp[(3 + 0 - mod) % 3];
        // 与 nums[i] 相加 mod 3 为 1
        let b = dp[(3 + 1 - mod) % 3];
        // 与 nums[i] 相加 mod 3 为 2
        let c = dp[(3 + 2 - mod) % 3];

        if (a || mod === 0) {
            dp[0] = Math.max(dp[0], a + nums[i]);
        }
        if (b || mod === 1) {
            dp[1] = Math.max(dp[1], b + nums[i]);
        }
        if (c || mod === 2) {
            dp[2] = Math.max(dp[2], c + nums[i]);
        }
    }

    return dp[0];
};
