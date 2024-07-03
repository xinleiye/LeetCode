/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = calcSum(x);

    return x % sum === 0 ? sum : -1;
};

function calcSum(num) {
    let sum = 0;

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}
