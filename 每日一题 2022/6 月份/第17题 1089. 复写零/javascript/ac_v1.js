/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let top = 0;
    let bottom = 0;
    const length = arr.length;

    while (top < length) {
        if (arr[bottom] === 0) {
            top += 2;
        } else {
            top++;
        }
        bottom++;
    }
    top--;
    bottom--;
    while (top >= 0) {
        if (top < length) {
            arr[top] = arr[bottom];
        }
        top--;
        if (arr[bottom] === 0) {
            arr[top] = 0;
            top--;
        }
        bottom--;
    }

    return null;
};
