/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let res = nums[0];
    let sum = nums[0];
    const length = nums.length;
    
    for (let i = 1; i < length; i++) {
        if (nums[i] > nums[i - 1]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        res = Math.max(res, sum);
    }
    
    return res;
};
