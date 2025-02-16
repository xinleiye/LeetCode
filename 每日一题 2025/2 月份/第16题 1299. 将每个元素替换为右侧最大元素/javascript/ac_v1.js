/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const total = arr.length;
    const res = new Array(total);
    let max = 0;

    res[total - 1] = -1;
    for (let i = total - 2; i >= 0; i--) {
        max = Math.max(max, arr[i + 1]);
        res[i] = max;
    }

    return res;
};