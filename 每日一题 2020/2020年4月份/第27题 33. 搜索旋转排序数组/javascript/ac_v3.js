/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = (left + right) >>> 1;

        if (nums[mid] === target) {
            return mid;
        }
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && nums[right] >= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};
