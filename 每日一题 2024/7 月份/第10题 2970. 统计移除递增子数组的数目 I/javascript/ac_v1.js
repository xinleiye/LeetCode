/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
    const total = nums.length;
    let left = 0;
    while (left < total - 1 && nums[left] < nums[left + 1]) {
        left++;
    }
    if (left === total - 1) {
        return (1 + total) * total / 2;
    }

    let res = left + 2;
    let right = total - 1;
    while (right === total - 1 || nums[right] < nums[right + 1]) {
        while (left >= 0 && nums[left] >= nums[right]) {
            left--;
        }
        res += left + 2;
        right--;
    }

    return res;
};
