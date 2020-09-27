/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
    let res = -1;
    let profit;
    let maxProfit = 0;
    let stops = 0;
    let waiting = 0;
    let boarded = 0;

    customers.forEach(num => {
        stops++;
        waiting += num;
        if (waiting >= 4) {
            boarded += 4;
            waiting -= 4;
        } else {
            boarded += waiting;
            waiting = 0;
        }
        profit = boarded * boardingCost - stops * runningCost;
        if (profit > maxProfit) {
            res = stops;
            maxProfit = profit;
        }
    });

    while (waiting > 0) {
        stops++;
        if (waiting >= 4) {
            boarded += 4;
            waiting -= 4;
        } else {
            boarded += waiting;
            waiting = 0;
        }
        profit = boarded * boardingCost - stops * runningCost;
        if (profit > maxProfit) {
            res = stops;
            maxProfit = profit;
        }
    }

    return res;
};
