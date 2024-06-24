/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const total = nums.length;
    const res = new Array(total).fill(-1);
    const stack = [];

    for (let i = 0; i < total * 2 - 1; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % total]) {
            res[stack[stack.length - 1]] = nums[i % total];
            stack.pop();
        }
        stack.push(i % total);
    }

    return res;
};
