/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    arr.sort((val1, val2) => {
        return val1 - val2;
    });

    return arr.slice(0, k);
};
