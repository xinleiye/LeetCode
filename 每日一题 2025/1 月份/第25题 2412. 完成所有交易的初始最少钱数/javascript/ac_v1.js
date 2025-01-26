/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function(transactions) {
    let totalLose = 0;
    let res = 0;

    for (const [cost, cashback] of transactions) {
        totalLose += Math.max(0, cost - cashback);
        res = Math.max(res, Math.min(cost, cashback));
    }

    return totalLose + res;
};
