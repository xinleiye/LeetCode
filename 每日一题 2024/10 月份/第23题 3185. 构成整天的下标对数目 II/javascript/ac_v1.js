/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    const hourArr = new Array(24).fill(0);
    let res = 0;

    for (const hour of hours) {
        hourArr[hour % 24]++;
    }
    res += hourArr[0] * (hourArr[0] - 1) / 2 + hourArr[12] * (hourArr[12] - 1) / 2;
    for (let i = 1; i < 12; i++) {
        res += hourArr[i] * hourArr[24 - i];
    }

    return res;
};
