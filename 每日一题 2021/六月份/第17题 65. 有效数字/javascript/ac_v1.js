/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const length = piles.length;
    const buff = new Array(piles.length);

    for (let i = 0; i < length; i++) {
        buff[i] = new Array(length).fill(0);
    }

    for (let i = 0; i < length; i++) {
        buff[i][i] = piles[i];
    }
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            buff[i][j] = Math.max(piles[i] - buff[i + 1][j], piles[j] - buff[i][j - 1]);
        }
    }

    return buff[0][length - 1] > 0;
};
