/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    const length = A.length;

    if (length === 1) {
        return true;
    }

    if (A[0] < A[length - 1]) {
        for (let i = 1; i < length; i++) {
            if (A[i - 1] > A[i]) {
                return false;
            }
        }
    } else {
        for (let i = 1; i < length; i++) {
            if (A[i - 1] < A[i]) {
                return false;
            }
        }
    }

    return true;
};
