/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let res = 0;
    let count1 = 0;

    while (count1 * cost1 <= total) {
        res += Math.floor((total - count1 * cost1) / cost2) + 1;
        count1++;
    }

    return res;
};
