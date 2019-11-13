/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    let uRow = (new Array(colsum.length)).fill(0);
    let lRow = (new Array(colsum.length)).fill(0);
    let pos;
    let colsumMap = new Map();

    for (let i = 0; i <= 2; i++) {
        colsumMap.set(i, []);
    }

    for (let i = 0; i < colsum.length; i++) {
        colsumMap.get(colsum[i]).push(i);
    }

    pos = colsumMap.get(2);
    for (let j = 0; j < pos.length; j++) {
        if (upper && lower) {
            uRow[pos[j]] = 1;
            lRow[pos[j]] = 1;
            upper--;
            lower--;
        } else {
            return [];
        }
    }
    pos = colsumMap.get(1);
    for (let j = 0; j < pos.length; j++) {
        if (upper) {
            uRow[pos[j]] = 1;
            lRow[pos[j]] = 0;
            upper--;
        } else if (lower) {
            uRow[pos[j]] = 0;
            lRow[pos[j]] = 1;
            lower--;
        } else {
            return [];
        }
    }
    if (upper || lower) {
        return [];
    }
    
    return [uRow, lRow];
};
