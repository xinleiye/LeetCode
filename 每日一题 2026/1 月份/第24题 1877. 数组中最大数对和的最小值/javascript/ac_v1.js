/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    const total = nums.length;
    const pairs = total / 2;
    let res = -Infinity;

    nums.sort((n1, n2) => n1 - n2);
    for (let i = 0; i < pairs; i++) {
        res = Math.max(res, nums[i] + nums[total - 1 - i]);
    }

    return res;
};
