/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let empty = numBottles;

    while (empty >= numExchange) {
        empty -= numExchange;
        numExchange++;
        numBottles++;
        empty++;
    }

    return numBottles;
};
