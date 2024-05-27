/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let diff = mean * (n + rolls.length);
    for (const n of rolls) {
        diff -= n;
    }
    if (diff < n || diff > 6 * n) {
        return [];
    }

    const res = new Array(n);
    const rest = diff % n;
    res.fill((diff - rest) / n);
    for (let i = 0; i < rest; i++) {
        res[i] += 1;
    }

    return res;
};
