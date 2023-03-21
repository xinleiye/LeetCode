/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res += (i - 1) * 4;
    }

    return res;
};
