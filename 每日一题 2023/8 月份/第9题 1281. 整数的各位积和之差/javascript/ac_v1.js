/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let multi = 1;

    while (n) {
        const num = n % 10;

        sum += num;
        multi *= num;
        n = (n - num) / 10;
    }

    return multi - sum;
};
