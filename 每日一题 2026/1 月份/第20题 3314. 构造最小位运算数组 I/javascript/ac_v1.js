/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const total = nums.length;
    const res = new Array(total);

    // lowbit
    for (let i = 0; i < total; i++) {
        res[i] = nums[i] > 2 ? nums[i] ^ (((nums[i] + 1) & ~nums[i]) >>> 1) : -1;
    }

    return res;
};
