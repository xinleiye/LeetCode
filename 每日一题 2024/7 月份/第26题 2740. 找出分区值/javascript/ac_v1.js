/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    nums.sort((n1, n2) => n1 - n2);

    const total = nums.length;
    let res = nums[total - 1];
    for (let i = 1; i < total; i++) {
        res = Math.min(res, nums[i] - nums[i - 1]);
    }

    return res;
};
