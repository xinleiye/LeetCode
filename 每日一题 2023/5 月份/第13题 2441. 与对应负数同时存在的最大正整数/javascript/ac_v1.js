/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let res = -1;
    
    nums.sort((n1, n2) => Math.abs(n1) - Math.abs(n2));
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] + nums[i - 1] === 0) {
            res = Math.abs(nums[i]);
            break;
        }
    }
    
    return res;
};
