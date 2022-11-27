/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    const total = customers.length;
    let res = 0;
    let minCost = total;
    const ySum = new Array(total + 1);

    ySum[0] = 0;
    for (let i = 0; i < total; i++) {
        ySum[i + 1] = customers[i] === "Y" ? ySum[i] + 1 : ySum[i];
    }
    // 在时刻 i 关门的代价
    for (let i = 0; i <= total; i++) {
        const cost = ySum[total] - ySum[i] + i - ySum[i];

        if (cost < minCost) {
            minCost = cost;
            res = i;
        }
    }

    return res;
};
