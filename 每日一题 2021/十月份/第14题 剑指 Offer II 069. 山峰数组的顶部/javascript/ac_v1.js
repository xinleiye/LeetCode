/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let res = 0;
    let left = 1;
    let right = arr.length - 2;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] > arr[mid + 1]) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};
