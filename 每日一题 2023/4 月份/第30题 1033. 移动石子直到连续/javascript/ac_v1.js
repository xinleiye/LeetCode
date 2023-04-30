/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    const posArr = [a, b, c];
    posArr.sort((p1, p2) => p1 - p2);
    if (posArr[2] - posArr[0] === 2) {
        return [0, 0];
    }

    let min = 0;
    let max = posArr[1] - 1 - posArr[0] + posArr[2] - posArr[1] - 1;
    if (posArr[2] - posArr[1] === 1 ||
        posArr[2] - posArr[1] === 2 ||
        posArr[1] - posArr[0] === 1 ||
        posArr[1] - posArr[0] === 2) {
        min = 1;
    } else {
        min = 2;
    }

    return [min, max];
};
