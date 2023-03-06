/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
    let res = -1;
    let maxProfit = 0;
    let time = 0;
    let curCustomer = 0;
    let curProfit = 0;
    const total = customers.length;

    while (curCustomer || time < total) {
        curCustomer += time < total ? customers[time] : 0;
        if (curCustomer >= 4) {
            curProfit += boardingCost * 4 - runningCost;
            curCustomer -= 4;
        } else {
            curProfit += boardingCost * curCustomer - runningCost;
            curCustomer = 0;
        }
        if (curProfit > maxProfit) {
            maxProfit = curProfit;
            res = time;
        }
        time++;
    }

    return maxProfit === 0 ? -1 : res + 1;
};
