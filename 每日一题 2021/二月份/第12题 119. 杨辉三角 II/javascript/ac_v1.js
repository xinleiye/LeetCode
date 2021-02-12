/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const res = new Array(rowIndex + 1).fill(0);
    let currentRow = 1;

    res[0] = 1;

    while (currentRow <= rowIndex) {
        res[currentRow] = 1;
        for (let i = currentRow - 1; i > 0; i--) {
            res[i] = res[i] + res[i - 1];
        }
        currentRow++;
    }

    return res;
};
