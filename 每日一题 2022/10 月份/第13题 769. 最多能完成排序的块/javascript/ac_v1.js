/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let res = 0;
    const length = arr.length;
    let max = 0;

    for (let i = 0; i < length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) {
            res++;
        }
    }

    return res;
};
