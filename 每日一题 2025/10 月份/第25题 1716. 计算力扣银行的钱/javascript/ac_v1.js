/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const weekCount = Math.floor(n / 7);
    const rest = n % 7;
    const a1 = (1 + 7) * 7 / 2;
    const an = a1 + (weekCount - 1) * 7;

    return calcSum(a1, an, weekCount) + calcSum(weekCount + 1, weekCount + rest, rest);
};

function calcSum(a1, an, count) {
    return (a1 + an) * count / 2;
}
