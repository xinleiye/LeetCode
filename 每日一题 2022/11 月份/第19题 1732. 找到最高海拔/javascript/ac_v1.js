/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let high = 0;
    let res = 0;

    for (const g of gain) {
        high += g;
        res = Math.max(res, high);
    }

    return res;
};
