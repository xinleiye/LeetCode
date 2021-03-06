/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let res = 0;
    let max = A[0];

    // A[i] + A[j] + i - j = A[i] + i + A[j] -j
    for (let i = 1; i < A.length; i++) {
        res = Math.max(res, max + A[i] - i);
        max = Math.max(max, A[i] + i);
    }

    return res;
};
