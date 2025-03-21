/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function(nums, k) {
    const total = nums.length;
    const postOr = new Array(total + 1).fill(0n);
    for (let i = total -1; i >= 0; i--) {
        postOr[i] = postOr[i + 1] | BigInt(nums[i]);
    }

    let preOr = 0n;
    let res = 0n;
    const bigK = BigInt(k);
    for (let i = 0; i < total; i++) {
        res = Math.max(Number(res), Number(preOr | (BigInt(nums[i]) << bigK) | postOr[i + 1]));
        preOr |= BigInt(nums[i]);
    }

    return Number(res);
};
