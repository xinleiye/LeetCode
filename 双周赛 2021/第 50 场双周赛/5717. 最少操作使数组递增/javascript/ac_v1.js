/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    let res = 0;
    const length = nums.length;
    const numsArr = nums.slice();

    for (let i = 1; i < length; i++) {
        if (nums[i] <= numsArr[i - 1]) {
            numsArr[i] = numsArr[i - 1] + 1;
            res += numsArr[i] - nums[i];
        }
    }
    
    return res;
};
