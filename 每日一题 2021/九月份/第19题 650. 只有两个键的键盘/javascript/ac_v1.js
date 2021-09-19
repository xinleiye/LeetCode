/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) {
        return 0;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return i + minSteps(n / i);
        }
    }

    return n;
};
