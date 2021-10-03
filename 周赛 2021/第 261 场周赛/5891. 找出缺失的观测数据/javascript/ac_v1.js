/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let res = new Array(n);
    const total = mean * (n + rolls.length);
    const totalRolls = rolls.reduce((pre, cur) => {
        return pre + cur;
    });
    const diff = total - totalRolls;

    if (diff < n || diff > 6 * n) {
        return [];
    } else {
        res.fill(Math.floor(diff / n));
        for (let i = 0, len = diff % n; i < len; i++) {
            res[i] += 1;
        }
    }

    return res;
};
