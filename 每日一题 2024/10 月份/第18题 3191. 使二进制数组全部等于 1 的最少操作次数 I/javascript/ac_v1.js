/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const total = nums.length;
    let pos = 0;
    let res = 0;

    while (pos < total - 2) {
        if (nums[pos] === 0) {
            nums[pos] = 1;
            nums[pos + 1] ^= 1;
            nums[pos + 2] ^= 1;
            res++;
        }
        pos++;
    }

    return (nums[total - 2] === 0 || nums[total - 1] === 0) ? -1 : res;
};
