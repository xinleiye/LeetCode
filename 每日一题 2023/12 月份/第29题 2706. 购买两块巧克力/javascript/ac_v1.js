/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let price1 = Number.MAX_SAFE_INTEGER
    let price2 = price1;

    for (const n of prices) {
        if (n < price2) {
            price1 = price2;
            price2 = n;
        } else if (n < price1) {
            price1 = n;
        }
    }

    return (price1 + price2) > money ? money : money - (price1 + price2);
};
