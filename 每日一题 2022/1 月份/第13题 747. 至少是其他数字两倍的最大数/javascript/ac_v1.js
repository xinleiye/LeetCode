/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length === 1) {
        return 0;
    }

    let maxIndex = nums[0] > nums[1] ? 0 : 1;
    let secondIndex = nums[0] > nums[1] ? 1 : 0;;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] >= nums[maxIndex]) {
            secondIndex = maxIndex;
            maxIndex = i;
        } else if (nums[i] > nums[secondIndex]) {
            secondIndex = i;
        }
    }

    return nums[maxIndex] >= nums[secondIndex] * 2 ? maxIndex : -1;
};
