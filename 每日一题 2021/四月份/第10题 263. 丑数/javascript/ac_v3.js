/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
    let factors = [2, 3, 5];

    if (n <= 0) {
        return false;
    }

    for (let i = 0; i < factors.length; i++) {
        while (n % factors[i] === 0) {
            n = n / factors[i];
        }
    }

    return n === 1;
};
