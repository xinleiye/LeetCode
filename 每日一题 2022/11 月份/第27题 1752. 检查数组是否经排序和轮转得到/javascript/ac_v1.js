/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const total = nums.length;
    let index = 0;

    for (let i = 1; i < total; i++) {
        if (nums[i] < nums[i - 1]) {
            index = i;
            break;
        }
    }
    if (index === 0) {
        return true;
    }
    for (let i = index + 1; i < total; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }

    return nums[0] >= nums[total - 1];
};
