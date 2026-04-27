/**
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
var minCost = function(startPos, homePos, rowCosts, colCosts) {
    let res = -rowCosts[startPos[0]] - colCosts[startPos[1]];
    const endRow = Math.max(startPos[0], homePos[0]);
    const endCol = Math.max(startPos[1], homePos[1]);

    for (let i = Math.min(startPos[0], homePos[0]); i <= endRow; i++) {
        res += rowCosts[i];
    }
    for (let i = Math.min(startPos[1], homePos[1]); i <= endCol; i++) {
        res += colCosts[i];
    }

    return res;
};
