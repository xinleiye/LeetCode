/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = new Array(nums.length).fill(0);
    
    res[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res[i] = nums[i] + res[i - 1];
    }

    return res;
};
