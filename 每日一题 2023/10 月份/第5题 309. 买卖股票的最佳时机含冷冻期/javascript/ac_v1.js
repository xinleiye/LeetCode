/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const total = prices.length;
    if (total === 0) {
        return 0;
    }

    let p1 = -prices[0];
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i < total; i++) {
        const tp1 = Math.max(p1, p3 - prices[i]);
        const tp2 = p1 + prices[i];
        const tp3 = Math.max(p2, p3);

        p1 = tp1;
        p2 = tp2;
        p3 = tp3;
    }

    return Math.max(p1, p2, p3);
};
