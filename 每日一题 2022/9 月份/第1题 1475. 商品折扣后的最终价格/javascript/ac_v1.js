/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const total = prices.length;
    const res = new Array(total);

    for (let i = 0; i < total; i++) {
        res[i] = prices[i];
        for (let j = i + 1; j < total; j++) {
            if (prices[j] <= prices[i]) {
                res[i] = prices[i] - prices[j];
                break;
            }
        }
    }

    return res;
};
