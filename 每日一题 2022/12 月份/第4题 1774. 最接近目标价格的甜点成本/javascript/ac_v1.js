/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
    let res = _.min(baseCosts);
    const dfsSearch = (index, cost) => {
        const resDiff = Math.abs(res - target);
        const costDiff = Math.abs(cost - target);

        if (resDiff < cost - target) {
            return;
        }
        if (resDiff >= costDiff) {
            if (resDiff > costDiff) {
                res = cost;
            } else {
                res = Math.min(res, cost);
            }
        }
        if (index === toppingCosts.length) {
            return;
        }
        dfsSearch(index + 1, cost);
        dfsSearch(index + 1, cost + toppingCosts[index]);
        dfsSearch(index + 1, cost + toppingCosts[index] * 2);
    };

    for (const b of baseCosts) {
        dfsSearch(0, b);
    }

    return res;
};
