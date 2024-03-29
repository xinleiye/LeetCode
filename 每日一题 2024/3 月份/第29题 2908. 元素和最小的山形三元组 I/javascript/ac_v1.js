/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    const total = nums.length;
    const left = new Array(total).fill(0);
    let min = nums[0];
    left[0] = nums[0];
    for (let i = 1; i < total; i++) {
        min = Math.min(min, nums[i]);
        left[i] = min;
    }

    let res = 300;
    let right = nums[total - 1];
    for (let i = total - 2; i > 0; i--) {
        if (left[i] < nums[i] && nums[i] > right) {
            res = Math.min(res, left[i] + right + nums[i]);
        }
        right = Math.min(right, nums[i]);
    }

    return res === 300 ? -1 : res;
};
