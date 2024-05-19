/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let res = 0;
    const total = arr.length;
    if (k >= total - 1) {
        for (const n of arr) {
            res = Math.max(res, n);
        }
        return res;
    }

    let index = 1;
    let win = 0;
    res = arr[0];
    while (win < k) {
        if (res > arr[index]) {
            win++;
        } else {
            res = arr[index];
            win = 1;
        }
        index++;
        if (index >= total) {
            index = 1;
        }
    }
    return res;
};
