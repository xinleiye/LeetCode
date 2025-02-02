/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let minRow = m;
    let minCol = n;

    ops.forEach(([x, y]) => {
        minRow = Math.min(x, minRow);
        minCol = Math.min(y, minCol);
    });

    return minRow * minCol;
};
