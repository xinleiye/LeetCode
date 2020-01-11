/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let res = new Array(arr.length);
    let max = arr[arr.length - 1];

    res[res.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
        max = Math.max(max, arr[i + 1]);
        res[i] = max;
    }

    return res;
};
