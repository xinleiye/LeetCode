/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];

    if (numRows === 0) {
        return res;
    } else if (numRows === 1) {
        res.push([1]);

        return res;
    } else if (numRows === 2) {
        res.push([1], [1, 1]);

        return res;
    }

    res.push([1], [1, 1]);
    for (let i = 2; i < numRows; i++) {
        let row = new Array(i + 1);
        let preRow = res[i - 1];

        row[0] = 1;
        for (let j = preRow.length - 1; j > 0; j--) {
            row[j] = preRow[j] + preRow[j - 1];
        }
        row[i] = 1;
        res.push(row);
    }

    return res;
};
