/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const length = nums.length;
    const res = new Array(nums.length);
    
    for (let i = 0; i < length; i++) {
        res[i] = nums[nums[i]];
    }
    
    return res;
};
