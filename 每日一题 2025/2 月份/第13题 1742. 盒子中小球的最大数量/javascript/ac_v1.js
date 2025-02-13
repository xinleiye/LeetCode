/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let res = 0;
    const boxmap = new Map();

    for (let i = lowLimit; i <= highLimit; i++) {
        const no = parseNumber(i);
        const count = boxmap.has(no) ? boxmap.get(no) : 0;

        boxmap.set(no, count + 1);
        res = Math.max(res, count + 1);
    }

    return res;
};

function parseNumber(number) {
    let sum = 0;

    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}
