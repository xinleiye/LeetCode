/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let sum = 0;
    let min = 1e5;
    let count = 0;

    for (const row of matrix) {
        for (const n of row) {
            sum += Math.abs(n);
            min = Math.min(min, Math.abs(n));
            if (n < 0) {
                count++;
            }
        }
    }
    if (count % 2) {
        sum -= min * 2;
    }

    return sum;
};
