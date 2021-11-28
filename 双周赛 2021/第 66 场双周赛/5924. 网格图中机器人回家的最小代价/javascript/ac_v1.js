/**
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
var minCost = function(startPos, homePos, rowCosts, colCosts) {
    let res = 0;
    const startRow = startPos[0];
    const startCol = startPos[1];
    const endRow = homePos[0];
    const endCol = homePos[1];

    if (startRow < endRow) {
        for (let i = startRow + 1; i <= endRow; i++) {
            res += rowCosts[i];
        }
    }
    if (startCol < endCol) {
        for (let i = startCol + 1; i <= endCol; i++) {
            res += colCosts[i];
        }
    }
    if (startRow > endRow) {
        for (let i = startRow - 1; i >= endRow; i--) {
            res += rowCosts[i];
        }
    }
    if (startCol > endCol) {
        for (let i = startCol - 1; i >= endCol; i--) {
            res += colCosts[i];
        }
    }

    return res;
};
