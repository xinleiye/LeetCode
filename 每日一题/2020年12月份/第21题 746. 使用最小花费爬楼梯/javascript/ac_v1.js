/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const costs = [0, 0];
    const length = cost.length;
    let curCost = 0;

    costs[0] = cost[0];
    costs[1] = cost[1];
    for (let i = 2; i < length; i++) {
        curCost = Math.min(costs[0], costs[1]) + cost[i];
        costs[0] = costs[1];
        costs[1] = curCost;
    }

    return Math.min(costs[0], costs[1]);
};
