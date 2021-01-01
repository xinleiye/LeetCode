/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    let aLen = m - 1;
    let bLen = n - 1;
    let index = A.length - 1;

    while (aLen >= 0 || bLen >= 0) {
        if (bLen < 0) {
            aLen--;
        } else if (aLen < 0) {
            A[index] = B[bLen];
            bLen--;
        } else if (A[aLen] >= B[bLen]) {
            A[index] = A[aLen];
            aLen--;
        } else {
            A[index] = B[bLen];
            bLen--;
        }
        index--;
    }

    return A;
};
