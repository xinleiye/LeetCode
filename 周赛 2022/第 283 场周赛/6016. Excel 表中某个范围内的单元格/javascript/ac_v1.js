/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const res = [];
    const cellInfo = s.split(":");
    const colS = cellInfo[0][0].charCodeAt(0);
    const rowS = parseInt(cellInfo[0][1], 10);
    const colE = cellInfo[1][0].charCodeAt(0);
    const rowE = parseInt(cellInfo[1][1], 10);

    for (let i = colS; i <= colE; i++) {
        for (let j = rowS; j <= rowE; j++) {
            res.push(`${String.fromCharCode(i)}${j}`)
        }
    }

    return res;
};
