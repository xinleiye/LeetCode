/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const res = new Array(rowIndex + 1).fill(0);

    res[0] = 1;
    for (let i = 1; i <= rowIndex; i++) {
        res[i] = res[i - 1] * (rowIndex - i + 1) / i;
    }

    return res;
};
