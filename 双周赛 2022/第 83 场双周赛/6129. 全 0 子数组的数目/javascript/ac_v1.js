/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let res = 0;
    const total = nums.length;
    let index = 0;
    
    while (index < total) {
        let zeroCount = 0;
        
        while (index < total && nums[index] === 0) {
            zeroCount++;
            index++;
        }
        res += (1 + zeroCount) * zeroCount / 2;
        index++;
    }
    
    return res;
};
