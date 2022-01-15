/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let res = 0;
    const weeklySave = 28;
    const weeks = Math.floor(n / 7);
    const rest = n % 7;

    res += weeklySave * weeks + weeks * (weeks - 1) / 2 * 7;
    res += (1 + weeks) * rest + rest * (rest - 1) / 2;

    return res;
};
