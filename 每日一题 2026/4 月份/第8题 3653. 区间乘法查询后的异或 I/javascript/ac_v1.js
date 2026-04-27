/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    let res = 0;
    const MOD = 1e9 + 7;

    for (let [l, r, k, v] of queries) {
        while (l <= r) {
            nums[l] = (nums[l] * v) % MOD;
            l += k;
        }
    }
    for(const n of nums) {
        res ^= n;
    }

    return res;
};
