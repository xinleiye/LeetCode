/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let count = 0;
    let index = 0;

    for (let i = 1, len = arr[arr.length - 1] + k; i <= len; i++) {
        if (i !== arr[index]) {
            count++;
        } else if (i === arr[index]) {
            index++;
        }
        if (count === k) {
            return i;
        }
    }
};
