/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let pow;
    let base = x;
    let res = 1;

    pow = n < 0 ? -n : n;

    while (pow > 0) {
        if (pow % 2) {
            res *= base;
        }
        base *= base;
        pow = Math.floor(pow / 2);
    }

    return n > 0 ? res : (1 / res);
};
