/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    nums.sort((n1, n2) => n1 - n2);

    let res = nums[1] - nums[0];
    const total = nums.length;
    for (let i = 1; i < total; i++) {
        res = Math.min(res, nums[i] - nums[i - 1]);
    }

    return res;
};
