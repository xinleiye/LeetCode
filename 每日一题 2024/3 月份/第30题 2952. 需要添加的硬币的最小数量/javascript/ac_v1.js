/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
    coins.sort((c1, c2) => c1 - c2);

    let res = 0;
    let cur = 1;
    let index = 0;
    const total = coins.length;
    while (cur <= target) {
        if (index < total && coins[index] <= cur) {
            cur += coins[index];
            index++;
        } else {
            cur *= 2;
            res++;
        }
    }

    return res;
};
