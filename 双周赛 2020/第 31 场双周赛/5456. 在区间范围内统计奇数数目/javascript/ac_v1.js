/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let res;
    let count = high - low + 1;

    if (count % 2 === 1) {
        if (low % 2 === 1) {
            res = (count + 1) / 2;
        } else {
            res = (count - 1) / 2;
        }
    } else {
        res = count / 2;
    }

    return res;
};
