/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1, -1];
    let lIndex;
    let rIndex;
    let binarySearch = (arr, target, dir) => {
        let index = arr.length;
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = (left + right) >>> 1;

            if (nums[mid] > target || (dir && nums[mid] === target)) {
                right = mid - 1;
                index = mid;
            } else {
                left = mid + 1;
            }
        }

        return index;
    };

    lIndex = binarySearch(nums, target, true);
    rIndex = binarySearch(nums, target, false) - 1;

    if (lIndex <= rIndex &&  nums[lIndex] === target && nums[rIndex] === target) {
        res[0] = lIndex;
        res[1] = rIndex;
    }

    return res;
};
