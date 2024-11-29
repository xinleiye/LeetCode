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
        for (let j = 0; j <= nums[i]; j++) {
            let count = 0;
            const t = Math.min(j, nums[i - 1], nums[i - 1] - nums[i] + j);

            for (let k = 0; k <= t; k++) {
                count = (count + memo[i - 1][k]) % MOD;
            }
            memo[i][j] = count;
        }
    }
    for (let i = 0; i <= nums[total - 1]; i++) {
        res = (res + memo[total - 1][i]) % MOD;
    }

    return res;
};
