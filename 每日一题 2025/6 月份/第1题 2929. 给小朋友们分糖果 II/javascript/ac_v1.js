/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    if (limit * 3 < n) {
        return 0;
    }

    let res = 0;
    const max = Math.min(n, limit);
    for (let i = 0; i <= max; i++) {
        const rest = n - i;
        if (rest <= limit) {
            res += rest + 1;
        } else if (rest > limit && rest <= limit * 2) {
            res += limit - (rest - limit) + 1;
        }
    }

    return res;
};
