/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let res = nums.length;
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        if (nums[i] === target) {
            res = Math.min(res, Math.abs(i - start));
        }
    }

    return res;
};
