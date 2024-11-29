/**
 * @param {number[]} nums
 * @return {number}
 */
var countOfPairs = function(nums) {
    const MOD = 1e9 + 7;
    const total = nums.length;
    const max = Math.max(...nums);
    const memo = new Array(total).fill(0).map(_ => new Array(max + 1).fill(0));
    let res = 0;

    for (let i = 0; i <= nums[0]; i++) {
        memo[0][i] = 1;
    }
    for (let i = 1; i < total; i++) {
        const preSum = new Array(max + 1).fill(0);

        preSum[0] = memo[i - 1][0];
        for (let j = 1; j <= max; j++) {
            preSum[j] = (preSum[j - 1] + memo[i - 1][j]) % MOD;
        }
        for (let j = 0; j <= nums[i]; j++) {
            const t = Math.min(j, nums[i - 1], nums[i - 1] - nums[i] + j);

            if (t >= 0) {
                memo[i][j] = preSum[t];
            }
        }
    }
    for (let i = 0; i <= nums[total - 1]; i++) {
        res = (res + memo[total - 1][i]) % MOD;
    }

    return res;
};
