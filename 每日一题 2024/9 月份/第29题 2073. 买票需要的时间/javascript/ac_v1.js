/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let res = 0;
    const tk = tickets[k];
    const total = tickets.length;

    for (let i = 0; i <= k; i++) {
        res += Math.min(tickets[i], tk);
    }
    for (let i = k + 1; i < total; i++) {
        res += Math.min(tickets[i], tk - 1);
    }

    return res;
};
