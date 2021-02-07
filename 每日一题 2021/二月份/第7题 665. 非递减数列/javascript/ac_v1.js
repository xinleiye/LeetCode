/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let index1 = 0;
    let index2 = 0;
    let count = 0;
    const length = nums.length;

    for (let i = 1; i < length; i++) {
        if (nums[i] < nums[i - 1]) {
            count++;
            index1 = i - 1;
            index2 = i;
        }
    }
    if (count > 1) {
        return false;
    }
    if (count === 0) {
        return true;
    }

    if (index1 === 0 || index2 === (length - 1)) {
        return true;
    }
    if (nums[index1 - 1] <= nums[index2] || nums[index1] <= nums[index2 + 1]) {
        return true;
    }
    return false;
};
