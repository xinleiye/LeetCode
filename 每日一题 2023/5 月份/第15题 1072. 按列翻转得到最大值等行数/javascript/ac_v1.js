/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const map = new Map();
    const maxCol = matrix[0].length;
    for (const row of matrix) {
        const rowVal = new Array(maxCol).fill(0);
        for (let i = 0; i < maxCol; i++) {
            rowVal[i] = row[0] ^ row[i];
        }
        const str = rowVal.join("");
        if (map.has(str)) {
            map.set(str, map.get(str) + 1);
        } else {
            map.set(str, 1);
        }
    }

    let res = 0;
    map.forEach((val) => {
        res = Math.max(res, val);
    });

    return res;
};
