/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function(nums) {
    nums.sort((n1, n2) => n1 - n2);

    const MOD = 1e9 + 7;
    const length = nums.length;
    const pow2 = new Array(length);
    pow2[0] = 1;
    for (let i = 1; i < length; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    let res = 0;
    for (let i = 0; i < length; i++) {
        res = (res + (pow2[i] - pow2[length - i - 1]) * nums[i]) % MOD;
    }

    return res;
};
