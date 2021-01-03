/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let res = 0;
    let left = 0;
    let right;
    let repeated = false;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            right = i;
            repeated = true;
        } else {
            if (repeated) {
                let maxCost = 0;

                for (let i = left; i <= right; i++) {
                    maxCost = Math.max(maxCost, cost[i]);
                    res += cost[i];
                }
                res -= maxCost;
                repeated = false;
            }
            left = i;
        }
    }

    if (repeated) {
        let maxCost = 0;

        for (let i = left; i <= right; i++) {
            maxCost = Math.max(maxCost, cost[i]);
            res += cost[i];
        }
        res -= maxCost;
        repeated = false;
    }

    return res;
};
