/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let buff = new Array(amount + 1).fill(0);

    buff[0] = 1;
    coins.forEach(coin => {
        for (let i = coin; i <= amount; i++) {
            buff[i] += buff[i - coin];
        }
    });

    return buff[amount];
};
