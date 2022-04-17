/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let res = 0;
    let num1 = 0;

    while (num1 * cost1 <= total) {
        const num2 = total - num1 * cost1;
        res += Math.floor(num2 / cost2) + 1;
        num1++;
    }

    return res;
};
