/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let totalWait = 0;
    let preFinish = 0;
    
    customers.forEach(item => {
        if (item[0] >= preFinish) {
            preFinish = item[0];
        }
        totalWait += (preFinish + item[1] - item[0]);
        preFinish += item[1];
    });

    return totalWait / customers.length;
};
