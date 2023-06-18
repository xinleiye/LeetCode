/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    return calcSum(3, n) + calcSum(5, n) + calcSum(7, n) - calcSum(15, n) - calcSum(35, n) - calcSum(21, n) + calcSum(105, n);
};

function calcSum(a, n) {
    const count = Math.floor(n / a);

    return (1 + count) * count / 2 * a;
}
