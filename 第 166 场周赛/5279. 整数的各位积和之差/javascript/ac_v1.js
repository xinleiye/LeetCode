/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let mul = 1;

    while (n) {
        let rest = n % 10;

        mul *= rest;
        sum += rest;

        n = (n - rest) / 10;
    }

    return mul - sum;
};
