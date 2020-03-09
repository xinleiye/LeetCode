/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let buy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buy) {
            res = Math.max(res, prices[i] - buy);
        } else {
            buy = prices[i];
        }
    }

    return res;
};
