/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let res = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (compare(nums, mid - 1, mid) < 0 && compare(nums, mid, mid + 1) > 0) {
            res = mid;
            break;
        }
        if (compare(nums, mid, mid + 1) < 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};

function getValue (arr, index) {
    if (index === -1 || index === arr.length) {
        return [0, 0];
    }

    return [1, arr[index]];
}

function compare (arr, index1, index2) {
    const val1 = getValue(arr, index1);
    const val2 = getValue(arr, index2);

    if (val1[0] !== val2[0]) {
        return val1[0] > val2[0] ? 1 : -1;
    }
    if (val1[1] === val2[1]) {
        return 0;
    }

    return val1[1] > val2[1] ? 1 : -1;
}
