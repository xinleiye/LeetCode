/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    if (n <= 1) {
        return String(n);
    }

    const res = [];
    while (n) {
        const rest = n & 1;
        res.unshift(rest);
        n -= rest;
        n = n / (-2);
    }

    return res.join("");
};
