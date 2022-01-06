/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let res = numBottles;
    let fullBottles = 0;
    let emptyBottles = numBottles;

    while (emptyBottles >= numExchange) {
        fullBottles = Math.floor(emptyBottles / numExchange);
        res += fullBottles;
        emptyBottles = (emptyBottles % numExchange) + fullBottles;
    }

    return res;
};
