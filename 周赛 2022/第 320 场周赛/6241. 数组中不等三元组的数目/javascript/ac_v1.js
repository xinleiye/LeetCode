/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let res = 0;
    const total = nums.length;
    
    for (let i = 0; i < total; i++) {
        for (let j = 0; j < total && j !== i; j++) {
            for (let k = 0; k < total && k !== i && k !== j; k++) {
                if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]) {
                    res++;
                }
            }
        }
    }
    
    return res;
};
