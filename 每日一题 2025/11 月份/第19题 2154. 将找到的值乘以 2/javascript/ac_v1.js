/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let res = original;

    nums.sort((n1, n2) => n1 - n2);
    while (binarySearch(nums, res) >= 0) {
        res = res * 2;
    }

    return res;
};

function binarySearch(num, tar) {
    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (num[mid] > tar) {
            right = mid - 1;
        } else if (num[mid] < tar) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}
