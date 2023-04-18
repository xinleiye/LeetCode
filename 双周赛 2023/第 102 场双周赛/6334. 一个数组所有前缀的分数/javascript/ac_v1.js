/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
    const total = nums.length;
    const res = new Array(total).fill(0);
    let max = nums[0];

    res[0] = nums[0] + max;
    for (let i = 1; i < total; i++) {
        max = Math.max(max, nums[i]);
        res[i] = res[i - 1] + nums[i] + max;
    }

    return res;
};
