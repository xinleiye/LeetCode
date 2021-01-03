/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let res = 0;
    let digits = [];

    while (num) {
        digits.unshift(num % 10);
        num = (num - num % 10) / 10;
    }

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 6) {
            digits[i] = 9;
            break;
        }
    }

    for (let item of digits) {
        res = res * 10 + item;
    }

    return res;
};
