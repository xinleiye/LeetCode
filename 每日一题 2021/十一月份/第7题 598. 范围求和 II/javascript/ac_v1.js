/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let minRow = m;
    let minCol = n;

    ops.forEach(item => {
        minRow = Math.min(minRow, item[0]);
        minCol = Math.min(minCol, item[1]);
    });

    return minRow * minCol;
};
