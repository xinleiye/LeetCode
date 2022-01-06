/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let res = 0;
    const total = prices.length;
    const descentCount = new Array(total).fill(1);

    for (let i = 1; i < total; i++) {
        if (prices[i - 1] - prices[i] === 1) {
            descentCount[i] += descentCount[i - 1];
        }
    }
    descentCount.forEach(count => {
        res += count;
    });

    return res;
};
