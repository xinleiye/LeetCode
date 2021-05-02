/**
 * @param {number[]} arr
 * @return {number}
 */
 var maximumElementAfterDecrementingAndRearranging = function(arr) {
    const length = arr.length;

    arr.sort((val1, val2) => {
        return val1 - val2;
    });
    arr[0] = 1;
    for (let i = 1; i < length; i++) {
        if (arr[i] - arr[i - 1] > 1) {
            arr[i] = arr[i - 1] + 1;
        }
    }

    return arr[length - 1];
};
