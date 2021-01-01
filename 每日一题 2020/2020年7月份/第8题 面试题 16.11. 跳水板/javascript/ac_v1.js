/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    let res = [];
    let minLen = shorter * k;
    let diff = longer - shorter;

    if (k === 0) {
        return res;
    }

    res[0] = minLen;
    if (diff === 0) {
        return res;
    } else {
        for (let i = 1; i <= k; i++) {
            res.push(res[res.length - 1] + diff);
        }
    }

    return res;
};
