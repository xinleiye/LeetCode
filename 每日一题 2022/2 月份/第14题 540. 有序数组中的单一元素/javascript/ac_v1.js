/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const mid = Math.floor((right - left) / 2) + left;

        if (nums[mid] === nums[mid ^ 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};
