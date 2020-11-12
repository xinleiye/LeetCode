/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let res = new Array(A.length);
    let oddIndex = 1;
    let evenIndex = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 1) {
            res[oddIndex] = A[i];
            oddIndex += 2;
        } else {
            res[evenIndex] = A[i];
            evenIndex += 2;
        }
    }

    return res;
};
