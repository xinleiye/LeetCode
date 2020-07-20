/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let res = numBottles;
    let rest = numBottles;

    while (rest >= numExchange) {
        res += Math.floor(rest / numExchange);
        rest = rest % numExchange + Math.floor(rest / numExchange);
    }
    
    return res;
};
