/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let index = 0;
    let res = 0;
    const length = nums.length;

    while (index < length) {
        const stack = [];

        stack.push(index);
        index++;
        while (nums[index] > nums[index - 1]) {
            stack.push(index);
            index++;
        }

        res = Math.max(res, stack.length);
    }

    return res;
};
