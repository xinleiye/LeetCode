/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let pre1 = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (pre1 === -1) {
                pre1 = i;
            } else {
                if ((i - pre1 - 1) < k) {
                    return false;
                }
                pre1 = i;
            }
        }
    }
    
    return true;
};
