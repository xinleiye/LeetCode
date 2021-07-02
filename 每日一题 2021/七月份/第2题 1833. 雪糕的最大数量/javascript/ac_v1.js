/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let res = 0;
    const length = costs.length;

    costs.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < length; i++) {
        if (costs[i] <= coins) {
            res++;
            coins -= costs[i];
        } else {
            return res;
        }
    }

    return res;
};
