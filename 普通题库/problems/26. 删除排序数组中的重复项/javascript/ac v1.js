/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let preIndex = 0;
    let preVal = nums[0];
    const length = nums.length;

    for (let i = 1; i < length; i++) {
        if (nums[i] !== preVal) {
            nums[++preIndex] = nums[i];
            preVal = nums[i];
        }
    }

    return preIndex + 1;
};
