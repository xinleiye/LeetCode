/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function(flips) {
    let count = 0;
    let maxIndex = 0;
    const total = flips.length;
    let res = 0;

    for (let i = 0; i < total; i++) {
        maxIndex = Math.max(maxIndex, flips[i]);
        count++;
        if (count === maxIndex) {
            res++;
        }
    }

    return res;
};
