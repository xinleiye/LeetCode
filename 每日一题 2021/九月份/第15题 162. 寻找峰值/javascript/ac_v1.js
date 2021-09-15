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

function getEle (arr, index) {
    if (index === -1 || index === arr.length) {
        return [0, 0];
    }

    return [1, arr[index]];
}

function compare (arr, index1, index2) {
    const ele1 = getEle(arr, index1);
    const ele2 = getEle(arr, index2);

    if (ele1[0] !== ele2[0]) {
        return ele1[0] > ele2[0] ? 1 : -1;
    }
    if (ele1[1] === ele2[1]) {
        return 0;
    }

    return ele1[1] > ele2[1] ? 1 : -1;
}
