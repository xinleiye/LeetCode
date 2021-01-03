/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let res = Infinity;
    let cost = 0;

    chips.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0, len = chips.length; i < len; i++) {
        cost = 0;
        for (let j = 0; j < len; j++) {
            cost += Math.abs((chips[j] - chips[i]) % 2);
        }
        if (cost < res) {
            res = cost;
        }
    }
    return res;
};
