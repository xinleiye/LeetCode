/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const total = prices.length;
    // 持有股票的利润
    let buy = -prices[0];
    // 未持有股票的利润
    let sell = 0;

    for (let i = 1; i < total; i++) {
        const abuy = Math.max(buy, sell - prices[i]);
        const asell = Math.max(sell, buy + prices[i] - fee);

        buy = abuy;
        sell = asell;
    }

    return sell;
};
