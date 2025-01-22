/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let res = 0;
    const total = piles.length;

    piles.sort((n1, n2) => n1 - n2);
    for (let i = total / 3; i < total ; i += 2) {
        res += piles[i];
    }

    return res;
};
