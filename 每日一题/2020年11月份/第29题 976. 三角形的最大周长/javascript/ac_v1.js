/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    const total = A.length;

    A.sort((val1, val2) => {
        return val2 - val1;
    });
    for (let i = 2; i < total; i++) {
        if (A[i - 2] < A[i - 1] + A[i]) {
            return A[i - 2] + A[i - 1] + A[i];
        }
    }

    return 0;
};
