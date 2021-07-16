/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let res = 0;
    const length = nums.length;
    let index = 0;

    while (index < length) {
        if (nums[index] === target) {
            res++;
        }
        index++;
    }

    return res;
};
