/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2) {
        return [];
    }

    let res = [];
    for (let i = 2; i <= finalSum; i += 2) {
        finalSum -= i;
        res.push(i);
    }
    res[res.length - 1] += finalSum;

    return res;
};
