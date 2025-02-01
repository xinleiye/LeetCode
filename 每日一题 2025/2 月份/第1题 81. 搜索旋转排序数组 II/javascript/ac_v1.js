/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let index = 1;
    const total = nums.length;

    while (index < total) {
        if (nums[index] < nums[index - 1]) {
            break;
        }
        index++;
    }
    if (target >= nums[0]) {
        return binarySearch(nums, 0, index - 1, target);
    } else {
        return binarySearch(nums, index, total - 1, target);
    }
};


function binarySearch(arr, left, right, target) {
    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            return true;
        }
    }

    return false;
}
