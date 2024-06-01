/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let res = 0;
    const max = Math.min(n, limit);

    for (let i = 0; i <= max; i++) {
        if (n - i <= 2 * limit) {
            res += Math.min(limit, n - i) - Math.max(0, n - i - limit) + 1;
        }
    }

    return res;
};
