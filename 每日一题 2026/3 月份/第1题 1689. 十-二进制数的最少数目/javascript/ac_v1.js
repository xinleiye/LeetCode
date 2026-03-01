/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let res = 0;

    for (const ch of n) {
        res = Math.max(res, Number(ch));
    }

    return res;
};
