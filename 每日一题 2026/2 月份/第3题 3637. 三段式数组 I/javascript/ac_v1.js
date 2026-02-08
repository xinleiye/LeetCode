/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    const total = nums.length;
    let index = 1;
    let count = 1;

    while (index < total && nums[index] > nums[index - 1]) {
        count++;
        index++;
    }
    if (count === 1) {
        return false;
    }
    count = 1;
    while (index < total && nums[index] < nums[index - 1]) {
        count++;
        index++;
    }
    if (count === 1 || index === total) {
        return false;
    }
    while (index < total && nums[index] > nums[index - 1]) {
        index++;
    }

    return index === total;
};
