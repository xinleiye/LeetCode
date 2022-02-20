/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2) {
        return [];
    }

    const res = [];
    let curSum = finalSum;
    let factor = 2;
    while (curSum >= factor) {
        curSum -= factor;
        res.push(factor);
        factor += 2;
    }
    res[res.length - 1] += curSum;

    return res;
};
