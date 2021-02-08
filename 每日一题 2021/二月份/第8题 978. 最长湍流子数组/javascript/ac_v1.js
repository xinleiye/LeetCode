/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let res = 1;
    let left = 0;
    let right = 0;
    const length = arr.length;

    while (right < length - 1) {
        if (left === right) {
            if (arr[left] === arr[left + 1]) {
                left++;
            }
            right++;
        } else {
            if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1] ||
                arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) {
                right++;
            } else {
                left = right;
            }
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
};
