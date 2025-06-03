/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const sum = (1 + n) * n / 2;
    const count = Math.floor(n / m);
    const sum2 = m * count + count * (count - 1) * m / 2;

    return sum - sum2 * 2;
};
