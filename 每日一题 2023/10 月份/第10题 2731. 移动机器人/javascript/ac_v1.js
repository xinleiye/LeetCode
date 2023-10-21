/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function(nums, s, d) {
    const MOD = 1e9 + 7;
    const total = nums.length;
    const dis = new Array(total);
    let res = 0;

    for (let i = 0; i < total; i++) {
        dis[i] = s[i] === "L" ? nums[i] -d : nums[i] + d;
    }
    dis.sort((d1, d2) => d1 - d2);
    for (let i = 1; i < total; i++) {
        res += ((((dis[i] - dis[i - 1]) * i) % MOD) * (total - i)) % MOD;
        res %= MOD;
    }

    return res;
};
