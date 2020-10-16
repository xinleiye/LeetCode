/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let res = new Array(A.length);
    let index = A.length - 1;
    let left = 0;
    let right = A.length - 1;

    while (left <= right) {
        let lVal = A[left] * A[left];
        let rVal = A[right] * A[right];

        if (lVal >= rVal) {
            res[index] = lVal;
            left++;
        } else {
            res[index] = rVal;
            right--;
        }
        index--;
    }

    return res;
};
