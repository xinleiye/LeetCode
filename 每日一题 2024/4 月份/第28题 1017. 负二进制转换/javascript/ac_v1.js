/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    if (n === 0) {
        return "0";
    }

    const res = [];
    let lowerBit = 0;
    while (n) {
        lowerBit = n & 1;
        res.unshift(lowerBit);
        n -= lowerBit;
        n /= -2;
    }

    return res.join("");
};
