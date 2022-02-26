/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let res = -1;
    let minNum = nums[0];
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        if (nums[i] > minNum) {
            res = Math.max(res, nums[i] - minNum);
        } else {
            minNum = nums[i];
        }
    }

    return res;
};
