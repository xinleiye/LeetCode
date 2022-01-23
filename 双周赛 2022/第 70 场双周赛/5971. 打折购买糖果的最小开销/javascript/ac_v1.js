/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    let res = 0;

    cost.sort((val1, val2) => val2 - val1);
    cost.forEach((val, index) => {
        if (index % 3 !== 2) {
            res += val;
        }
    });

    return res;
};
