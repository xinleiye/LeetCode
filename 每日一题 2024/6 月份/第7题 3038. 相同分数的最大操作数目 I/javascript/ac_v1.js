/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    const total = nums.length;
    let res = 0;
    const sum = nums[0] + nums[1];
    let index = 1;

    while (index < total) {
        if (nums[index] + nums[index - 1] === sum) {
            res++;
        } else {
            return res;
        }
        index += 2;
    }

    return res;
};
