/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    let res = 0;
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                res++;
            }
        }
    }
    
    return res;
};
