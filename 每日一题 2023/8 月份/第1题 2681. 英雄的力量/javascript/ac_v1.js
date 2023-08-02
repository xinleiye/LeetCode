/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfPower = function(nums) {
    let res = 0n;
    let factor = 0n;
    const mod = BigInt(1e9 + 7);

    nums.sort((n1, n2) => n1 - n2);
    for (const num of nums) {
        const n = BigInt(num);

        res = (res + (n * n) * (factor + n)) % mod;
        factor = ((factor * 2n) % mod + n) % mod;
    }

    return res;
};
