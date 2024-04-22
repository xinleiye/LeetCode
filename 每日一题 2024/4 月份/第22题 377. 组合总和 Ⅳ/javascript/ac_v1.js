/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target + 1).fill(0);

    dp[0] = 1;
    nums.sort((n1, n2) => n1 - n2);
    for (let i = 1; i <= target; i++) {
        for (const n of nums) {
            if (i - n >= 0) {
                dp[i] += dp[i - n];
            } else {
                break;
            }
        }
    }

    return dp[target];
};
