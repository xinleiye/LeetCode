/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let res = 0;
    let curSum = 0;
    const bannedSet = new Set();

    for (const num of banned) {
        bannedSet.add(num);
    }
    for (let i = 1; i <= n; i++) {
        if (!bannedSet.has(i)) {
            curSum += i;
            if (curSum <= maxSum) {
                res++;
            } else {
                break;
            }
        }
    }

    return res;
};
