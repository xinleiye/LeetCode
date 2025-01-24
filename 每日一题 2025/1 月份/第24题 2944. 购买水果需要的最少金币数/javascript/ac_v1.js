/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
    const total = Math.floor((prices.length + 1) / 2);
    const cost = prices.slice();

    for (let i = total - 1; i > 0; i--) {
        let min = Number.MAX_SAFE_INTEGER;

        for (let j = i; j <= i * 2; j++) {
            min = Math.min(min, cost[j]);
        }
        cost[i - 1] += min;
    }

    return cost[0];
};
