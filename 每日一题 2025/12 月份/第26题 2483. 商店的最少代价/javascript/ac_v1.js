/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let totalY = 0;
    for (const c of customers) {
        if (c === "Y") {
            totalY++;
        }
    }

    let curY = 0;
    let curN = 0;
    let res = 0;
    let minCost = totalY;
    let time = 0;
    for (const c of customers) {
        if (c === "Y") {
            curY++;
        } else {
            curN++;
        }
        time++;

        const cost = totalY - curY + curN;
        if (cost < minCost) {
            res = time;
            minCost = cost;
        }
    }

    return res;
};
