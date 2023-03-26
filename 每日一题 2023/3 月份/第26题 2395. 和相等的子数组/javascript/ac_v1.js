/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    let right = arr.length - 1;
    while (right > 0 && arr[right] >= arr[right - 1]) {
        right--;
    }
    if (right === 0) {
        return 0;
    }

    const total = arr.length;
    let res = right;
    for (let i = 0; i < total; i++) {
        while (right < total && arr[right] < arr[i]) {
            right++;
        }
        res = Math.min(res, right - i - 1);
        if (i + 1 < total && arr[i + 1] < arr[i]) {
            break;
        }
    }

    return res;
};
