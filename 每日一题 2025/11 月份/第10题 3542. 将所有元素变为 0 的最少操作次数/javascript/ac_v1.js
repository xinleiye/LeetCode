/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    
};
å/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0;
    const stack = [0];

    for (const n of nums) {
        while (n < stack[stack.length - 1]) {
            stack.pop();
        }
        if (n != stack[stack.length - 1]) {
            res++;
            stack.push(n)
        }
    }

    return res;
};
