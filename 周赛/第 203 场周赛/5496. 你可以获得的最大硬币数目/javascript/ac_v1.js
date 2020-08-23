/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let res = 0;
    let index = piles.length - 2;
    
    piles.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0, len = piles.length / 3; i < len; i++) {
        res += piles[index];
        index -= 2;
    }
    
    return res;
};
