/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let index = 0;
    const length = gas.length;

    while (index < length) {
        let totalGas = 0;
        let totalCost = 0;
        let count = 0;

        while (count < length) {
            let curIndex = (index + count) % length;

            totalGas += gas[curIndex];
            totalCost += cost[curIndex];
            if (totalCost > totalGas) {
                break;
            }
            count++;
        }
        if (count === length) {
            return index;
        } else {
            index = index + count + 1;
        }
    }

    return -1;
};
