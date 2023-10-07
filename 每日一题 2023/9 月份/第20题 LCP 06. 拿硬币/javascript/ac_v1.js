/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
    let res = 0;

    for (const c of coins) {
        res += (c + 1) >>> 1;
    }

    return res;
};
