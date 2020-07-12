/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let res = 0;
    
    for (let i = 0, len = nums.length - 1; i < len; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                res++;
            }
        }
    }

    return res;
};
