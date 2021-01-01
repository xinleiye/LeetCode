/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let res = 0;
    let lenArr = new Array(A.length + 1);

    for (let i = 0; i <= A.length; i++) {
        lenArr[i] = new Array(B.length + 1).fill(0);
    }

    for (let i = 1; i <= A.length; i++) {
        for (let j = 1; j <= B.length; j++) {
            lenArr[i][j] = A[i - 1] === B[j - 1] ? lenArr[i - 1][j - 1] + 1 : 0;
            res = Math.max(res, lenArr[i][j]);
        }
    }

    return res;
};
