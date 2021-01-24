/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res = 0;
    let preHigh = 0;

    gain.forEach(val => {
        res = Math.max(res, val + preHigh);
        preHigh = val + preHigh;
    });

    return res;
};
