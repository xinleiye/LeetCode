/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let res = 0;
    const MOD = 1e9 + 7;
    let left = 0;
    let right = nums.length - 1;
    const powMod = new Array(nums.length + 1);
    const total = nums.length;

    nums.sort((val1, val2) => val1 - val2);
    powMod[0] = 1;
    for (let i = 1; i <= total; i++) {
        powMod[i] = (powMod[i - 1] * 2) % MOD;
    }
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            res = (res + powMod[right - left]) % MOD;
            left++;
        } else {
            right--;
        }
    }

    return res;
};
