/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let sortedIndex = new Array(nums.length);
    let bSearch = (nums, sorted, target) => {
        let left = 0;
        let right = sorted.length - 1;
        let mid;
        let res = -1;

        while (left <= right) {
            mid = (left + right) >>> 1;

            if (nums[sorted[mid]] < target) {
                left = mid + 1;
            } else if (nums[sorted[mid]] > target) {
                right = mid - 1;
            } else {
                res = sorted[mid];
                break;
            }
        }

        return res;
    };

    for (let i = 0; i < nums.length; i++) {
        sortedIndex[i] = i;
    }

    sortedIndex.sort((val1, val2) => {
        return nums[val1] - nums[val2];
    });

    return bSearch(nums, sortedIndex, target);
};
