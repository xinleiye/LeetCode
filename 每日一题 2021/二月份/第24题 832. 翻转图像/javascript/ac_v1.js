/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const maxRow = A.length;
    const maxCol = A[0].length;

    for (let i = 0; i < maxRow; i++) {
        let left = 0;
        let right = maxCol - 1;

        while (left < right) {
            if (A[i][left] === A[i][right]) {
                A[i][left] ^= 1;
                A[i][right] ^= 1;
            }
            left++;
            right--;
        }
        if (left === right) {
            A[i][left] ^= 1;
        }
    }

    return A;
};
