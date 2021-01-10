/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let res = 0;
    const weeklySave = 21;
    const weeks = Math.floor(n / 7);

    for (let i = 1; i <= weeks; i++) {
        res += weeklySave + i * 7;
    }

    for (let i = 1, len = n % 7; i <= len; i++) {
        res += i + weeks;
    }

    return res;
};
