/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    const total = prices.length;
    let index = 0;
    let res = 0;

    while (index < total) {
        let count = 1;

        index++;
        while (index < total && prices[index - 1] - prices[index] === 1) {
            count++;
            index++;
        }
        res += (1 + count) * count / 2;
    }

    return res;
};
