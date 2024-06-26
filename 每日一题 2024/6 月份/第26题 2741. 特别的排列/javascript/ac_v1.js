/**
 * @param {number[]} nums
 * @return {number}
 */
var specialPerm = function(nums) {
    const MOD = 1e9 + 7;
    const total = nums.length;
    const dp = new Array(1 << total).fill(0).map(() => new Array(total).fill(-1));
    let res = 0;

    for (let i = 0; i < total; i++) {
        res = (res + dfsSearch(dp, nums, (1 << total) - 1, i, MOD)) % MOD;
    }

    return res;
};

function dfsSearch(memo, arr, state, pos, mod) {
    if (memo[state][pos] !== -1) {
        return memo[state][pos];
    }
    if (state === (1 << pos)) {
        return 1;
    }
    memo[state][pos] = 0;

    const total = arr.length;
    for (let i = 0; i < total; i++) {
        if (pos === i || !(state >> i & 1)) {
            continue;
        }
        if (arr[pos] % arr[i] !== 0 && arr[i] % arr[pos] !== 0) {
            continue;
        }
        memo[state][pos] = (memo[state][pos] + dfsSearch(memo, arr, state ^ (1 << pos), i, mod)) % mod
    }

    return memo[state][pos];
}
