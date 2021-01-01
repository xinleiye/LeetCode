/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    // 1: 买; 2: 卖
    let status = 1;
    let cost = prices[0];
    let sell = 0;
    let currentTime = 1;

    while (currentTime < prices.length) {
        if (status === 1) {
            while (prices[currentTime] <= prices[currentTime - 1]) {
                cost = prices[currentTime];
                currentTime++;
            }
            status = 2;
        } else if (status === 2) {
            while (prices[currentTime] > prices[currentTime - 1]) {
                sell = prices[currentTime];
                currentTime++;
            }
            res += sell - cost;
            status = 1;
        }
    }

    return res;
};
