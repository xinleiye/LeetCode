/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
    let res = 0;

    for (const c of composition) {
        let left = 1;
        let right = 1e9;

        while (left <= right) {
            const mid = left + ((right - left) >>> 1);

            if (canCreate(c, cost, mid, stock, budget)) {
                left = mid + 1;
                res = Math.max(res, mid);
            } else {
                right = mid - 1;
            }
        }
    }

    return res;
};

function canCreate(needed, cost, count, stock, budget) {
    const total = needed.length;
    let totalCost = 0;

    for (let i = 0; i < total; i++) {
        if (needed[i] * count > stock[i]) {
            totalCost += (needed[i] * count - stock[i]) * cost[i];
        }
        if (totalCost > budget) {
            return false;
        }
    }

    return true;
}
