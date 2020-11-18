/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let index = 0;
    let gasNum = gas.length;

    while (index < gasNum) {
        let totalGas = 0;
        let totalCost = 0;
        let count = 0;

        while (count < gasNum) {
            let currentIndex = (index + count) % gasNum;

            totalGas += gas[currentIndex];
            totalCost += cost[currentIndex];
            if (totalGas < totalCost) {
                break;
            }
            count++;
        }
        if (count === gasNum) {
            return index;
        } else {
            index = index + count + 1;
        }
    }

    return -1;
};
